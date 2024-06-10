import {Alert} from 'react-native';
import {
  check,
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import {IOS_DEVICE} from '../constants/theme';

export const checkCameraPermission = async () => {
  try {
    const cameraPermissionCheck = await check(
      IOS_DEVICE ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
    );

    if (cameraPermissionCheck === RESULTS.GRANTED) {
      return cameraPermissionCheck;
    } else {
      await requestCameraPermission();
    }
  } catch (error) {
    console.error('Error checking Camera permission:', error);
    return false;
  }
};

export const requestCameraPermission = async () => {
  try {
    const result = await request(
      IOS_DEVICE ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
    );
    if (result === RESULTS.GRANTED) {
      return result;
    } else {
      Alert.alert(
        'Agreem',
        'We need camera permission for access to the capture images.',
      );
    }
  } catch (error) {
    console.error('Error requesting microphone permission:', error);
    return false;
  }
};

export const checkGalleryPermission = async () => {
  try {
    const galleryPermissionCheck = await check(
      IOS_DEVICE
        ? PERMISSIONS.IOS.MEDIA_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    );

    if (galleryPermissionCheck === RESULTS.GRANTED) {
      return galleryPermissionCheck;
    } else {
      await requestStoragePermission();
    }
  } catch (error) {
    console.error('Error checking Gallery permission:', error);
    return false;
  }
};

export const requestStoragePermission = async () => {
  try {
    const result = await request(
      IOS_DEVICE
        ? PERMISSIONS.IOS.MEDIA_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    );
    if (result === RESULTS.GRANTED) {
      return result;
    } else {
      Alert.alert(
        'Agreem',
        'We need image and video permission for access to the store images and videos on storage.',
      );
    }
  } catch (error) {
    console.error('Error requesting microphone permission:', error);
    return false;
  }
};

export const requestMultiplePermissions = async () => {
  const permissions = await requestMultiple(
    IOS_DEVICE
      ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MEDIA_LIBRARY]
      : [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_MEDIA_IMAGES],
  );

  const cameraPermission = IOS_DEVICE
    ? permissions['ios.permission.CAMERA'] === RESULTS.GRANTED
    : permissions['android.permission.CAMERA'] === RESULTS.GRANTED;
  const storagePermission = IOS_DEVICE
    ? permissions['ios.permission.MEDIA_LIBRARY'] === RESULTS.GRANTED
    : permissions['android.permission.READ_MEDIA_IMAGES'] === RESULTS.GRANTED;

  if (cameraPermission && storagePermission) {
    return true;
  }
};
