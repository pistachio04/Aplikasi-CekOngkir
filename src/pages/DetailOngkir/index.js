import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, ListItem} from '../../components';

const DetailOngkir = ({navigation, route}) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    cekOngkir();
  }, []);

  console.log({route});
  const cekOngkir = () => {
    const params = route.params.data;
    const formData = new URLSearchParams();
    formData.append('origin', params.origin);
    formData.append('destination', params.destination);
    formData.append('weight', params.weight);
    formData.append('courier', params.courier);
    formData.append('key', '14dc08e575811a0b040c0c306cdb91d9');
    console.log('formDaaata: ', formData);
    console.log('Data Params: ', params);

    axios
      .post('https://api.rajaongkir.com/starter/cost', formData.toString())
      .then(response => {
        console.log('Response Data: ', response);
        const ongkir = response.data.rajaongkir.results[0].costs;
        console.log('formData: ', formData);
        console.log('formData: ', response);

        console.log('Cost ongkir: ', ongkir);
        setResults(ongkir);
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.page}>
      <Header
        type="header-icon"
        title="Detail Ongkos Kirim"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {results.map(result => {
            return (
              <ListItem
                key={new Date().getMilliseconds + Math.random()}
                heading={result.service}
                subHeading={result.description}
                days={result.cost[0].etd}
                price={result.cost[0].value}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailOngkir;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {margin: 20},
});
