import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import AppBars from '../components/AppBars';
import HeaderTitle from '../components/HeaderTitle';
import Cards from '../components/Cards';
import {MEDICAL_FORM, UPCOMING_CONS} from '../../assets/data';
import ActionCards from '../components/ActionCards';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBars
        title={'Dashboard'}
        isBell={true}
        isMenu={true}
        onBellPress={() => console.log('Bell press')}
      />
      <HeaderTitle title={'Upcoming Consultations'} />
      <Cards data={UPCOMING_CONS} />
      <HeaderTitle title={'Medical Files'} />
      <Cards data={MEDICAL_FORM} />
      <View style={styles.actionCardContainer}>
        <ActionCards
          iconName={'hospital'}
          title={'Schedules'}
          onPress={() => {}}
        />
        <ActionCards iconName={'phone'} title={'Call'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  actionCardContainer: {
    flexDirection: 'row',
  },
});

export default Home;
