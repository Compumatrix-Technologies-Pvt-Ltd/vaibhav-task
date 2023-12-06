import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Height_, Width_ } from '../Helpers/Dimentions';

interface PetItem {
  bred_for: string;
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  life_span: string;
  name: string;
  temperament: string;
  url: string;
  weight: {
    imperial: string;
    metric: string;
  };
}

interface ListingPetsProps {
    item: {
      item: PetItem;
    };
  }
const ListingPets : React.FC<ListingPetsProps> = (item: any) => {
  const Item_ = item.item.item;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={{uri: Item_.url}} style={styles.dogImage} />
      <View style={styles.cardContent}>
        <Text style={styles.dogName}>{Item_.name}</Text>
        <Text style={styles.dogDetails}>{`Breed: ${Item_.breed_group}`}</Text>
        <Text
          style={styles.dogDetails}>{`Temperament: ${Item_.temperament}`}</Text>
        <Text
        style={
          styles.dogDetails
        }>{`Height: ${Item_.height.imperial} inches`}</Text>
      <Text
        style={
          styles.dogDetails
        }>{`Weight: ${Item_.weight.imperial} lbs`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingPets;
const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  
    elevation: 2,
  },
  dogImage: {
    width: Width_*0.97,
    height: Height_/4,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
  },
  dogName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  dogDetails: {
    fontSize: 14,
    color: '#666',
  },
});
