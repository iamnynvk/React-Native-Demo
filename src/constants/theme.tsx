import {Dimensions, Platform} from 'react-native';

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  danger: '#F44336',
  lightGreen: '#4CAF50',
  primary: '#804C96',
  blue: '#3F3E8C',
  lightBorder: '#0b66c3',
  borderLines: '#4A4E51',
  inputColor: '#f9fafc',
  textColor: '#262626',
  secondaryColor: '#0b66c3',
  wrapperColor: '#f9fafc',
};

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const IOS_DEVICE = Platform.OS === 'ios';
export const ANDROID_DEVICE = Platform.OS === 'android';

export const FONT = {
  notoSansBlack: 'NotoSans-Black',
  notoSansBold: 'NotoSans-Bold',
  notoSansExtraBold: 'NotoSans-ExtraBold',
  notoSansExtraLight: 'NotoSans-ExtraLight',
  notoSansLight: 'NotoSans-Light',
  notoSansMedium: 'NotoSans-Medium',
  notoSansRegular: 'NotoSans-Regular',
  notoSansSemiBold: 'NotoSans-SemiBold',
  notoSansThin: 'NotoSans-Thin',
};
const appTheme = {COLORS, FONT, SCREEN_HEIGHT, SCREEN_WIDTH};

export default appTheme;
