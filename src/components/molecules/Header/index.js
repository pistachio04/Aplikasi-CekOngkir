import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cek OngKir App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  title: {fontWeight: '700', color: colors.white, fontSize: 20},
});
