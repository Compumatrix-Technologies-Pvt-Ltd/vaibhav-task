import React from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import {IMAGEPATH} from '../assets/Images/Images';
import { Height_ } from '../Helpers/Dimentions';



const AvatarList: React.FC = () => {
  const numbersArray = Array.from({length: 16}, (_, index) => index + 1);

  const renderItem = () => {
    return (
      <TouchableOpacity style={styles.avatarContainer}>
        <Image style={styles.avatarImage} source={IMAGEPATH.Avtar2} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbersArray}
        renderItem={renderItem}
        numColumns={4}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height:Height_/2
  },
  avatarContainer: {
    margin: 5,
    borderRadius: 50,
    
  },
  avatarImage: {
    width: 70, 
    height: 70,
    borderRadius: 25,
  },
});

export default AvatarList;
