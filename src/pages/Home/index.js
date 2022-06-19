import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const Home = ({navigation, props}) => {
  const [provinces, setProvinces] = useState([]);
  const [originCitys, setOriginCitys] = useState([]);
  const [destinationCitys, setDestinationCitys] = useState([]);
  const [selectedOriginProvince, setSelectedOriginProvince] = useState();
  const [selectedOriginCity, setSelectedOriginCity] = useState();
  const [selectedDestinationProvince, setSelectedDestinationProvince] =
    useState();
  const [selectedDestinationCity, setSelectedDestinationCity] = useState();
  const [weight, setWeight] = useState(0);
  const [courier, setCourier] = useState({});

  useEffect(() => {
    getDataProvince();
    getDataDestinationProvince();
    // getDataCity();
  }, []);

  const getDataProvince = () => {
    axios
      .get(
        'https://api.rajaongkir.com/starter/province?key=14dc08e575811a0b040c0c306cdb91d9',
      )
      .then(response => {
        // console.log('respond GET Province: ', response);
        setProvinces(response.data.rajaongkir.results);
      })
      .catch(error => console.log(error));
  };

  const getDataDestinationProvince = () => {
    axios
      .get(
        'https://api.rajaongkir.com/starter/province?key=14dc08e575811a0b040c0c306cdb91d9',
      )
      .then(response => {
        // console.log('respond GET Province: ', response);
        setSelectedDestinationProvince(response.data.rajaongkir.results);
      })
      .catch(error => console.log(error));
  };

  const onSelectOriginProvince = value => {
    // console.log('select Prov: ', value);
    getDataCity(value);
    setSelectedOriginProvince(value);
  };

  const onSelectDestinationProvince = value => {
    // console.log('select Prov: ', value);
    getDataDestinationCity(value);
    setSelectedDestinationProvince(value);
  };

  const getDataCity = id => {
    axios
      .get(
        `https://api.rajaongkir.com/starter/city?key=14dc08e575811a0b040c0c306cdb91d9&province=${id}`,
      )
      .then(response => {
        // console.log('respond Province GET City: ', response);
        setOriginCitys(response.data.rajaongkir.results);
      })
      .catch(error => console.log(error));
  };

  const getDataDestinationCity = id => {
    axios
      .get(
        `https://api.rajaongkir.com/starter/city?key=14dc08e575811a0b040c0c306cdb91d9&province=${id}`,
      )
      .then(response => {
        // console.log('respond Province GET City: ', response);
        setDestinationCitys(response.data.rajaongkir.results);
      })
      .catch(error => console.log(error));
  };

  const onSubmit = value => {
    const params = {
      origin: selectedOriginCity,
      destination: selectedDestinationCity,
      weight: weight,
      courier: courier,
    };
    console.log('pass Data: ', params);
    navigation.navigate('DetailOngkir', {data: params});
  };

  return (
    <View style={styles.page}>
      <Header title="CekOngkir App" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.cardWrapper, styles.elevation]}>
            <Text style={styles.heading}>Alamat Asal</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={selectedOriginProvince}
              onValueChange={value => onSelectOriginProvince(value)}>
              {provinces.map(province => {
                return (
                  <Picker.Item
                    key={province.province_id}
                    value={province.province_id}
                    label={province.province}
                  />
                );
              })}
            </Picker>
            <Picker
              style={styles.pickerStyle}
              selectedValue={selectedOriginCity}
              onValueChange={value => setSelectedOriginCity(value)}>
              {originCitys.map(city => {
                return (
                  <Picker.Item
                    key={city.city_id}
                    value={city.city_id}
                    label={city.city_name}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={[styles.cardWrapper, styles.elevation]}>
            <Text style={styles.heading}>Alamat Tujuan</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={selectedDestinationProvince}
              onValueChange={value => onSelectDestinationProvince(value)}>
              {provinces.map(province => {
                return (
                  <Picker.Item
                    key={province.province_id}
                    value={province.province_id}
                    label={province.province}
                  />
                );
              })}
            </Picker>
            <Picker
              style={styles.pickerStyle}
              selectedValue={selectedDestinationCity}
              onValueChange={value => setSelectedDestinationCity(value)}>
              {destinationCitys.map(city => {
                return (
                  <Picker.Item
                    key={city.city_id}
                    value={city.city_id}
                    label={city.city_name}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={[styles.cardWrapper, styles.elevation]}>
            <Text style={styles.heading}>Berat Paket</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Masukkan berat paket!"
                style={styles.inputStyle}
                value={weight}
                onChangeText={value => setWeight(value)}
                // keyboardType="number-pad"
              />
              <Text style={styles.inputLabel}>Gram</Text>
            </View>
          </View>
          <View style={[styles.cardWrapper, styles.elevation]}>
            <Text style={styles.heading}>Ekspedisi</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={courier}
              onValueChange={value => setCourier(value)}>
              <Picker.Item label="Pilih Ekspedisi" value="0" />
              <Picker.Item label="JNE" value="jne" />
              <Picker.Item label="POS" value="pos" />
              <Picker.Item label="TIKI" value="tiki" />
            </Picker>
          </View>
          <Gap height={8} />
          <Button label="Hitung" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {margin: 20},
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
  pickerStyle: {
    height: 45,
    width: '100%',
    color: colors.secondary,
    justifyContent: 'center',
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
