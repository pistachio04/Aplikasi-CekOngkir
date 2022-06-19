import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({onPress, label, type, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.wrapperButton} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
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
    fontFamily: fonts.primary[600],
    fontSize: 18,
  },
});
