import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, FONT} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IPropsActionCard {
  iconName: string;
  title: string;
  onPress: () => void;
}

const ActionCards = ({iconName, title, onPress}: IPropsActionCard) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.cardFirstContainer}>
        <MaterialCommunityIcons
          name={iconName}
          size={wp(10)}
          color={COLORS.white}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(6),
    marginHorizontal: wp(4),
    flex: 1,
    minHeight: wp(36),
    borderRadius: wp(2),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardFirstContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(18),
    width: wp(18),
    borderRadius: wp(10),
    backgroundColor: COLORS.primary,
  },
  title: {
    marginTop: wp(2),
    fontSize: wp(3),
    fontFamily: FONT.notoSansMedium,
    color: COLORS.primary,
  },
});

export default ActionCards;
