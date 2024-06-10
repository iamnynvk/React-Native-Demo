import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONT, images} from '../constants';
import AppBars from '../components/AppBars';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheets from '../components/BottomSheets';
import {
  checkCameraPermission,
  checkGalleryPermission,
} from '../utils/AskPermission';
import {Checkbox, TextInput} from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const Account = () => {
  const refRBSheet: any = useRef();
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickerMode, setPickerMode] = useState('date');

  const onMediaPicker = useCallback(async (type: any) => {
    if (type === 'camera') {
      await checkCameraPermission();
      ImagePicker.openCamera({
        cropping: true,
        width: 500,
        height: 500,
        includeExif: true,
        compressImageQuality: 0.8,
      })
        .then((image: any) => {
          setProfileImage(image?.path);
          refRBSheet?.current?.close();
        })
        .catch(e => refRBSheet?.current?.close());
    } else {
      await checkGalleryPermission();
      ImagePicker.openPicker({
        cropping: true,
        width: 500,
        height: 500,
        includeExif: true,
        compressImageQuality: 0.8,
      })
        .then(image => {
          setProfileImage(image?.path);
          refRBSheet?.current?.close();
        })
        .catch(e => refRBSheet?.current?.close());
    }
  }, []);

  const handleConfirm = (event: any, date: any) => {
    setDatePickerVisibility(false);
    if (pickerMode === 'date') {
      const formattedDate = moment(date).format('DD-MM-YYYY');
      setSelectedDate(formattedDate);
    } else {
      const formattedTime = moment(date).format('HH:mm');
      setSelectedTime(formattedTime);
    }
  };

  const submitHandler = () => {
    console.log('User profile photo :', profileImage);
    console.log('Email Address : ', fullName);
    console.log('Is Available for interview : ', checked);
    console.log('Selected Date for interview : ', selectedDate);
    console.log('selected Time for interview : ', selectedTime);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBars title={'Profile'} isBell={false} isMenu={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Photo */}
        <View style={styles.photoContainer}>
          <View>
            <Image
              source={profileImage ? {uri: profileImage} : images.img_user_logo}
              resizeMode="cover"
              style={styles.imageStyles}
            />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => refRBSheet.current.open()}
              style={styles.openModelStyles}>
              <Ionicons
                name={'add-circle'}
                size={45}
                color={COLORS.secondaryColor}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <TextInput
            label="Email Address"
            value={fullName}
            onChangeText={text => setFullName(text)}
          />

          <View style={styles.checkContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.text}>
              Are you available for the interview?
            </Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={[styles.text, {justifyContent: 'center'}]}>
              Select Date :{' '}
            </Text>
            <TouchableOpacity
              style={styles.chooseDate}
              activeOpacity={0.8}
              onPress={() => {
                setPickerMode('date');
                setDatePickerVisibility(true);
              }}>
              <Text style={[styles.text, {color: COLORS.white}]}>
                {selectedDate ? selectedDate : `Choose Date`}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dateContainer}>
            <Text style={[styles.text, {justifyContent: 'center'}]}>
              Select Time :{' '}
            </Text>
            <TouchableOpacity
              style={styles.chooseDate}
              activeOpacity={0.8}
              onPress={() => {
                setPickerMode('time');
                setDatePickerVisibility(true);
              }}>
              <Text style={[styles.text, {color: COLORS.white}]}>
                {selectedTime ? selectedTime : `Choose Time`}
              </Text>
            </TouchableOpacity>
          </View>

          {isDatePickerVisible && (
            <RNDateTimePicker
              value={new Date()}
              mode={pickerMode}
              display="default"
              onChange={handleConfirm}
            />
          )}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={submitHandler}>
          <Text style={[styles.text, {color: COLORS.white, fontSize: wp(5)}]}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomSheets refs={refRBSheet} sheetHeight={'12%'}>
        <View style={styles.sheetContainer}>
          <View style={styles.sheetBoxContainer}>
            <TouchableOpacity
              style={styles.boxContainer}
              activeOpacity={0.9}
              onPress={() => onMediaPicker('camera')}>
              <Ionicons name="camera" size={30} color={COLORS.wrapperColor} />
              <Text style={[styles.text, {color: COLORS?.wrapperColor}]}>
                Camera
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sheetBoxContainer}>
            <TouchableOpacity
              style={styles.boxContainer}
              activeOpacity={0.9}
              onPress={() => onMediaPicker('gallery')}>
              <Ionicons name="image" size={30} color={COLORS.wrapperColor} />
              <Text style={[styles.text, {color: COLORS.wrapperColor}]}>
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheets>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  photoContainer: {
    marginTop: wp(10),
    width: wp(40),
    height: wp(40),
    alignSelf: 'center',
  },
  openModelStyles: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderRadius: wp(20),
  },
  imageStyles: {
    height: wp(40),
    width: wp(40),
    alignSelf: 'center',
    borderRadius: wp(20),
  },
  sheetContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sheetBoxContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  boxContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: COLORS.wrapperColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: FONT.notoSansMedium,
    color: COLORS.textColor,
    fontSize: wp(3.6),
  },
  bodyContainer: {
    marginHorizontal: wp(4),
    marginTop: wp(6),
    marginBottom: wp(4),
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(4),
  },
  dateContainer: {
    marginTop: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  chooseDate: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(2),
    backgroundColor: COLORS.lightGreen,
  },
  submitButton: {
    marginHorizontal: wp(4),
    marginVertical: wp(8),
    height: wp(12),
    borderRadius: wp(2),
    backgroundColor: COLORS.lightBorder,
    justifyContent: 'center',
  },
});

export default Account;
