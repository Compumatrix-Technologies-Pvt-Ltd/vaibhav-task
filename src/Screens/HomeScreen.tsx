import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SpinnerItem from '../Components/SpinningLoader';
import {callDogsData} from '../ApiConfig/ApiCall';
import {DogsList} from '../ApiConfig/Endpoints';
import ListingPets from '../Components/ListingPets';
import ListEmpty from '../Components/ListEmpty';

const HomeScreen = () => {
  const [dogs, setDogs] = useState([]);
  const [Loader, setLoader] = useState(false);

  const fetchDogsData = async () => {
    setLoader(true);

    try {
      const List = await callDogsData(DogsList);

      setLoader(false);

      setDogs(List);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchDogsData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List of Dogs</Text>
      <FlatList
        data={dogs}
        ListEmptyComponent={() => {
          return <ListEmpty />;
        }}
        renderItem={item => {
          return <ListingPets item={item} />;
        }}
      />
      <SpinnerItem loader={Loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1C1C1C',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
