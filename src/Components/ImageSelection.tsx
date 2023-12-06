import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../assets/Colors/Colors';
import {VECTOR_ICONS} from '../assets/Icons';
import {Height_, Width_} from '../Helpers/Dimentions';
import {FONTS} from '../assets/fonts/Fonts';

import SectionImageTab from './SectionImageTab';
import AvtarSelectionTab from './AvtarSelectionTab';
const ImageSelection = ({setModalVisible}:any) => {
  const [Selection, setSelection] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <TouchableOpacity onPress={()=>{
       setModalVisible(false);
      }}
        style={styles.CrossView}>
        <VECTOR_ICONS.Entypo name="cross" size={30} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          width: Width_ * 0.95,
          marginTop: Height_ / 35,
        }}>
        <View>
          <Text
            style={{
              color: COLORS.PrimaryBlack,
              fontFamily: FONTS.Regular,
              fontSize: 20,
            }}>
            Choose profile photo.
          </Text>
          <Text
            style={{
              color: COLORS.PrimaryBlack,
              fontFamily: FONTS.Regular,
              fontSize: 16,
              marginTop: '2%',
            }}>
            Choose a profile photo from your library or select an avatar to add
            to your profile
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            backgroundColor: 'rgba(241, 245, 249, 1)',
            borderRadius: 10,
            marginTop: Height_ / 25,
          }}>
          <TouchableOpacity
            onPress={() => setSelection(0)}
            style={{
              backgroundColor:
                Selection == 0 ? COLORS.LightBlue : 'rgba(241, 245, 249, 1)',
              width: '50%',
              borderRadius: 8,
              padding: 8,
            }}>
            <Text
              style={[
                styles.Label,
                {color: Selection == 0 ? COLORS.White : COLORS.PrimaryBlack},
              ]}>
              Choose photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelection(1)}
            style={{
              backgroundColor:
                Selection == 1 ? COLORS.LightBlue : 'rgba(241, 245, 249, 1)',
              width: '50%',
              borderRadius: 8,
              padding: 8,
            }}>
            <Text
              style={[
                styles.Label,
                {color: Selection == 1 ? COLORS.White : COLORS.PrimaryBlack},
              ]}>
              Avatars
            </Text>
          </TouchableOpacity>
        </View>

      </View>
     {Selection == 0 ?    <SectionImageTab setModalVisible={setModalVisible} /> : <AvtarSelectionTab setModalVisible={setModalVisible} />}
    </SafeAreaView>
  );
};

export default ImageSelection;

const styles = StyleSheet.create({
  Label: {
    color: COLORS.White,
    fontSize: 16,
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  CrossView:{
    backgroundColor: 'rgba(241, 245, 249, 1)',
    height: 40,
    width: 40,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4%',
  }
});
