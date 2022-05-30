import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Button = () => {
  return (
    <View style={styles.wrapperButton}>
      <Text style={styles.label}>Cek Ongkir</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapperButton: {
    height: 50,
    borderRadius: 4,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 20,
  },
});
