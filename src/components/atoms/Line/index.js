import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Line = () => {
  return <View style={styles.line} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
  },
});
