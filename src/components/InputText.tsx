import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, FONT, SCREEN_WIDTH} from '../constants/theme';

interface IPropInput {
  placeHolderText?: string;
  refs?: any;
  isSecure?: boolean;
  onChange: any;
  isAutoFocus?: boolean;
  isNextFocus?: any;
  keyType?: any;
  textContainer?: any;
  values: string;
  maxLength?: number;
  onBlurInput?: any;
  numOfLine?: number;
  isMultiLine?: boolean;
  isError?: any;
  isEditable?: boolean;
  customStyle?: any;
  isTouch?: boolean;
  setActiveInputField?: any;
  name?: string;
  activeInputField?: string;
}

const InputText = ({
  placeHolderText,
  refs,
  isSecure,
  onChange,
  isAutoFocus,
  isNextFocus,
  keyType,
  textContainer,
  maxLength,
  values,
  onBlurInput,
  numOfLine,
  isMultiLine,
  isError,
  isEditable,
  customStyle,
  setActiveInputField,
  name,
  activeInputField,
}: IPropInput) => {
  let isPrimaryColor = activeInputField === name;

  return (
    <View style={textContainer}>
      <TextInput
        ref={refs}
        style={[
          styles.textInputStyles,
          {
            borderColor: isError
              ? COLORS.danger
              : isPrimaryColor
              ? COLORS?.lightBorder
              : COLORS?.borderLines,
            backgroundColor: COLORS?.inputColor,
          },
          customStyle,
        ]}
        placeholder={placeHolderText}
        autoFocus={isAutoFocus}
        onFocus={() => setActiveInputField(name)}
        value={values}
        onChangeText={onChange}
        onSubmitEditing={() => {
          setActiveInputField('');
          setTimeout(() => {
            isNextFocus?.current?.focus();
          }, 300);
        }}
        onBlur={onBlurInput}
        secureTextEntry={isSecure}
        maxLength={maxLength}
        placeholderTextColor={'#979292'}
        keyboardType={keyType}
        numberOfLines={numOfLine}
        multiline={isMultiLine}
        editable={isEditable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyles: {
    borderWidth: 1,
    borderColor: COLORS?.borderLines,
    width: SCREEN_WIDTH / 1.2,
    height: wp(12),
    borderRadius: wp(2.4),
    paddingHorizontal: 12,
    color: COLORS?.textColor,
    padding: 0,
    fontFamily: FONT.notoSansMedium,
  },
});

export default InputText;
