import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {VECTOR_ICONS} from '../assets/Icons';
import {FONTS} from '../assets/fonts/Fonts';
import Button from './Button';
import { Height_ } from '../Helpers/Dimentions';
import RBSheet from 'react-native-raw-bottom-sheet';
import PickImageBottom from './PickImageBottom';
import { COLORS } from '../assets/Colors/Colors';
import { useMyContext } from '../Context/MyContext';

const SectionImageTab = ({setModalVisible} : any) => {
  const {value, setValue} = useMyContext();
  const [RefSheetVisible, setRefSheetVisible] = useState(false);
  const refRBSheet = useRef();
  const [ImageT, setImage] = useState(''|| null);

  useEffect(() => {
    GetImage();
  }, []);

  const GetImage = async () => {
    const ImageUri = await AsyncStorage.getItem('Profile');
    // setImage(ImageUri);

  
  };

  const OnAction = async () => { 
    await setValue('Image')
    await setModalVisible(false)
  }
  return (
    <>
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View
        style={styles.MainView}>
        <Image
          source={{uri: ImageT}}
          style={{
            height: 192,
            width: 192,
            resizeMode: 'contain',
            borderRadius: 100,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          refRBSheet.current.open();
        }}
        style={styles.Camera}>
        <VECTOR_ICONS.Ionicons name="camera-outline" size={15} />
        <Text
          style={{
            color: 'rgba(2, 6, 23, 0.85)',
            fontFamily: FONTS.Regular,
            fontSize: 16,
          }}>
          Edit Photo
        </Text>
      </TouchableOpacity>
    </View>
    <View style={{marginTop: Height_ / 8}} />
      <Button Tittle={'Save'} Action={OnAction} />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        closeOnPressBack={true}
        closeOnPressBackdrop={true}
        visible={RefSheetVisible}
        onBackButtonPress={() => setRefSheetVisible(false)}
        onBackdropPress={() => setRefSheetVisible(false)}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: COLORS.LightBlue,
          },
          container: {
            height: Height_ / 4,
          },
        }}>
        <PickImageBottom refRBSheet={refRBSheet} setImage={setImage}  />
      </RBSheet>
    </>
  );
};

export default SectionImageTab;

const styles = StyleSheet.create({
  MainView:{
    backgroundColor: 'rgba(241, 245, 249, 1)',
    height: 200,
    width: 200,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4%',
    marginTop: '8%',
  },
  Camera:{
    backgroundColor: 'rgba(241, 245, 249, 1)',
    height: 33,
    width: 110,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: '7%',
  }
});
