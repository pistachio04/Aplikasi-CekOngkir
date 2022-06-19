import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const HeaderWithIcon = ({title, onPress}) => {
  return (
    <View>
      <View style={styles.container}>
        <Button type="icon-only" icon="back" onPress={onPress} />
        <Text style={styles.title}>{title}</Text>
        <Gap width={24} />
      </View>
    </View>
  );
};

export default HeaderWithIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[700],
    color: colors.white,
    fontSize: 18,
  },
});
