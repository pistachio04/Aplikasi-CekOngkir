import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const CardEkspedisi = ({title}) => {
  return (
    <View style={[styles.cardWrapper, styles.elevation]}>
      <Text style={styles.heading}>{title}</Text>
      <Picker style={styles.pickerStyle}>
        <Picker.Item label="Pilih Ekspedisi" value="java" />
        <Picker.Item label="JNE" value="js" />
        <Picker.Item label="SiCepat" value="rn" />
      </Picker>
    </View>
  );
};

export default CardEkspedisi;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 16,
    marginBottom: 8,
  },
  elevation: {
    shadowColor: colors.secondary,
    elevation: 20,
  },
  heading: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginBottom: 8,
    color: colors.text.primary,
  },
  pickerStyle: {
    height: 50,
    color: colors.secondary,
    justifyContent: 'center',
  },
});
