import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

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
  pickerStyle: {
    height: 50,
    width: '100%',
    color: 'black',
    justifyContent: 'center',
  },
});
