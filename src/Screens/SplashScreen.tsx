import React, {useEffect} from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';

import {IMAGEPATH} from '../assets/Images/Images';
import {Height_, Width_} from '../Helpers/Dimentions';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IMAGEPATH.Doggie}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  image: {
    width: Width_,
    height: Height_,
    resizeMode: 'cover',
  },
});

export default SplashScreen;
