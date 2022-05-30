import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const CardAlamat = ({title}) => {
  return (
    <View style={[styles.cardWrapper, styles.elevation]}>
      <Text style={styles.heading}>{title}</Text>
      <Picker style={styles.pickerStyle}>
        <Picker.Item label="Pilih Provinsi" value="java" />
        <Picker.Item label="Jawa Tengah" value="js" />
        <Picker.Item label="Yogyakarta" value="rn" />
      </Picker>
      <Picker style={styles.pickerStyle}>
        <Picker.Item label="Pilih Kota" value="java" />
        <Picker.Item label="Magelang" value="js" />
        <Picker.Item label="Sleman" value="rn" />
      </Picker>
    </View>
  );
};

export default CardAlamat;

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
