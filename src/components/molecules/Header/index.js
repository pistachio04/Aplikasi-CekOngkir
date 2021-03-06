import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import HeaderWithIcon from './HeaderWithIcon';

const Header = ({title, type, onPress}) => {
  if (type === 'header-icon') {
    return <HeaderWithIcon type={type} title={title} onPress={onPress} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[700],
    color: colors.white,
    fontSize: 18,
  },
});
