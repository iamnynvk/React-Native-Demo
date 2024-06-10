import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import AppBars from '../components/AppBars';
import DeviceInfo from 'react-native-device-info';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FONT} from '../constants';

const Device = () => {
  const [appVersion, setAppVersion] = useState<string>('');
  const [buildVersion, setBuildVersion] = useState<string>('');
  const [bundleId, setBundleId] = useState<string>('');
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [totalDiskSpace, setTotalDiskSpace] = useState<string>('');

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const version = DeviceInfo.getVersion();
      const build = DeviceInfo.getBuildNumber();
      const bundle = DeviceInfo.getBundleId();
      const battery = await DeviceInfo.getBatteryLevel();
      const diskSpace = await DeviceInfo.getTotalDiskCapacity();

      setAppVersion(version);
      setBuildVersion(build);
      setBundleId(bundle);
      setBatteryLevel(battery);
      setTotalDiskSpace((diskSpace / (1024 * 1024 * 1024)).toFixed(2) + ' GB'); // Convert bytes to GB
    };

    fetchDeviceInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppBars title={'Device Info'} isBell={false} isMenu={false} />
      <Text style={styles.text}>App Version : {appVersion}</Text>
      <Text style={styles.text}>Build Version : {buildVersion}</Text>
      <Text style={styles.text}>Bundle Identifier : {bundleId}</Text>
      <Text style={styles.text}>
        Battery Level :{' '}
        {batteryLevel !== null
          ? (batteryLevel * 100).toFixed(0) + '%'
          : 'Loading...'}
      </Text>
      <Text style={styles.text}>Total Disk Space: {totalDiskSpace}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
    fontFamily: FONT.notoSansMedium,
  },
});

export default Device;
