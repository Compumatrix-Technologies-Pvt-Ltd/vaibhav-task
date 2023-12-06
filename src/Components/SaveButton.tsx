

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { COLORS } from '../assets/Colors/Colors';
import { FONTS } from '../assets/fonts/Fonts';


const SaveButton = (props: any) => {


  const OnAction = () => {
    props?.GoTo ? props.navigation.navigate(props?.GoTo) : props.Action()
  };

  return (
    <TouchableOpacity
      onPress={() => {
        OnAction();
      }}
      style={styles.ButtonView}>
      <Text style={styles.ButtonText}>{props.Tittle}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
    ButtonView: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.LightBlue,
        padding: 20,
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
        backgroundColor:COLORS.White,
        borderWidth: 1,
        
      },
      ButtonText: {
        color: COLORS.LightBlue,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: FONTS.Regular,
      },
})
