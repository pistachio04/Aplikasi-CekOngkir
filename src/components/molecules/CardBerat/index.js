import * as React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardBerat = ({title}) => {
  return (
    <View style={[styles.cardWrapper, styles.elevation]}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Masukkan berat paket!"
          style={styles.inputStyle}
        />
        <Text style={styles.inputLabel}>Gram</Text>
      </View>
    </View>
  );
};

export default CardBerat;

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
  inputWrapper: {flexDirection: 'row', alignItems: 'center'},
  inputStyle: {
    // borderWidth: 1,
    borderColor: 'grey',
    borderBottomWidth: 1,
    padding: 12,
    // borderRadius: 8,
  },
  inputLabel: {flex: 1, marginLeft: 12},
});
