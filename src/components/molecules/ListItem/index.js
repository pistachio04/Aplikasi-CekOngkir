import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ListItem = ({image, heading, subHeading, days, price}) => {
  return (
    <View style={[styles.cardWrapper, styles.elevation]}>
      <Image source={{uri: image}} style={styles.picture} />
      <View style={styles.content}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
        <Text style={styles.days}>{days} days</Text>
      </View>
      <View>
        <Text style={styles.price}>Rp. {price}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  elevation: {
    shadowColor: colors.secondary,
    elevation: 20,
  },
  heading: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginBottom: 2,
    color: colors.secondary,
  },
  subHeading: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
  days: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  pickerStyle: {
    height: 45,
    width: '100%',
    color: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    height: 60,
    width: 60,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 70 / 2,
    marginRight: 18,
  },
  content: {
    flex: 1,
  },
  price: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
});
