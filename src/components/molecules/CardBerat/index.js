import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const CardBerat = ({title, label}) => {
  return (
    <View style={[styles.cardWrapper, styles.elevation]}>
      <Text style={styles.heading}>{title}</Text>
      <FloatingLabelInput
        // style={[
        //   styles.containerStyles,
        //   styles.customLabelStyles,
        //   styles.inputStyles,
        //   styles.labelStyles,
        // ]}
        style={styles.float}
        label={label}
        keyboardType="numeric"
      />
    </View>
  );
};

export default CardBerat;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 24,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    shadowColor: 'black',
    elevation: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: 'black',
  },
  containerStyles: {
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRadius: 8,
  },
  customLabelStyles: {
    colorFocused: 'red',
    fontSizeFocused: 12,
  },
  labelStyles: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  inputStyles: {
    color: 'black',
    paddingHorizontal: 8,
  },
  float: {
    borderColor: 'red',
  },
});
