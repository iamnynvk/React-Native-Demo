import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONT} from '../constants';

interface IHeaderProps {
  title: string;
}

const HeaderTitle = ({title}: IHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp(4),
  },
  title: {
    fontFamily: FONT.notoSansBold,
    fontSize: wp(4),
    color: COLORS.blue,
  },
});

export default HeaderTitle;
