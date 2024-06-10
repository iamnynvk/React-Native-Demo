import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS} from '../constants';

const BottomSheets = ({refs, children, sheetHeight}: any) => {
  return (
    <RBSheet
      ref={refs}
      openDuration={5000}
      closeOnDragDown={true}
      customStyles={{
        container: {
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          height: sheetHeight,
          backgroundColor: COLORS?.borderLines,
        },
        wrapper: {
          backgroundColor: 'transparent',
        },
      }}
      animationType="slide"
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      closeOnPressBack={true}>
      {children}
    </RBSheet>
  );
};

export default BottomSheets;
