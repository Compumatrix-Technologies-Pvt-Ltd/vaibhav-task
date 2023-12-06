import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { COLORS } from '../assets/Colors/Colors';
import { FONTS } from '../assets/fonts/Fonts';


const Button = (props: any) => {


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

export default Button;

const styles = StyleSheet.create({
    ButtonView: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.LightBlue,
        padding: 20,
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
      },
      ButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: FONTS.Regular,
      },
})
