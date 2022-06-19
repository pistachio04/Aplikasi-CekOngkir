import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const CardAlamat = ({
  title,
  key,
  label,
  value,
  selectedValue,
  onValueChange,
}) => {
  return (
    <View style={[styles.cardWrapper, styles.elevation]}>
      <Text style={styles.heading}>{title}</Text>
      <Picker
        style={styles.pickerStyle}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item key={key} label={label} value={value} />
      </Picker>
      <Picker
        style={styles.pickerStyle}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item label={label} value={value} />
      </Picker>
    </View>
  );
};

export default CardAlamat;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 18,
    marginBottom: 12,
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
    height: 45,
    width: '100%',
    color: colors.secondary,
    justifyContent: 'center',
  },
});
