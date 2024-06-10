import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONT} from '../constants';

interface ICardProps {
  data: Array<Object>;
}

const Cards = ({data}: ICardProps) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity activeOpacity={0.8} style={styles.cardPress}>
        <View style={styles.titleContainer}>
          {data?.map((client: any) => {
            return (
              <Text key={client?.id} style={styles.doctorName}>
                {client?.name}
              </Text>
            );
          })}
        </View>
        <View style={styles.remainingContainer}>
          <MaterialCommunityIcons
            name="stethoscope"
            color={COLORS.primary}
            size={wp(14)}
            style={{marginBottom: 10}}
          />
        </View>
        <View style={[styles.remainingContainer, {alignItems: 'center'}]}>
          <Text style={styles.numStyles}>{data?.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: wp(4),
  },
  cardPress: {
    borderRadius: wp(2),
    backgroundColor: COLORS.white,
    minHeight: wp(30),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    padding: wp(4),
    flex: 0.7,
  },
  doctorName: {
    fontSize: wp(3),
    fontFamily: FONT.notoSansMedium,
    color: COLORS.primary,
  },
  remainingContainer: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  numStyles: {
    fontSize: wp(14),
    color: COLORS.primary,
    paddingRight: wp(6),
    fontFamily: FONT.notoSansMedium,
  },
});

export default Cards;
