import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import {MyContextProvider} from './src/Context/MyContext';

const App = () => {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </MyContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
