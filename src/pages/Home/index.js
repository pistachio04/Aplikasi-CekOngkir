import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Button,
  CardAlamat,
  CardBerat,
  CardEkspedisi,
  Header,
} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <CardAlamat title="Alamat Asal" />
          <CardAlamat title="Alamat Tujuan" />
          <CardBerat title="Berat Paket" label="Gram" />
          <CardEkspedisi title="Pilih Ekspedisi" />
          <Button />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {margin: 20},
});
