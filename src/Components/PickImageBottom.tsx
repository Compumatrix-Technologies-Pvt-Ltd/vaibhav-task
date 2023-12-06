import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/Colors/Colors';
import {FONTS} from '../assets/fonts/Fonts';
import {VECTOR_ICONS} from '../assets/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PickImageBottom = ({refRBSheet, setImage}: any) => {
  const openGallery = () => {
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 700,
        height: 700,
        cropping: false,
        includeBase64: true,
        mediaType: 'photo',
      })
        .then(async image => {
          refRBSheet.current.close();
          //   console.log("Syysyys", image.data);
          setImage(`data:image/jpeg;base64,${image.data}`);

          await AsyncStorage.setItem(
            'Profile',
            `data:image/jpeg;base64,${image.data}`,
          );
          //   chatAPI(`data:image/jpeg;base64,${image.data}`, "image")
        })
        .catch(function (error) {
          console.log('Error image :', error);
        });
    }, 1000);
  };

  const takephoto = () => {
    // refRBSheet.current.close()
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 700,
        height: 700,
        cropping: false,
        includeBase64: true,
        mediaType: 'photo',
      })
        .then(async image => {
          refRBSheet.current.close();

          setImage(`data:image/jpeg;base64,${image.data}`);

          await AsyncStorage.setItem(
            'Profile',
            `data:image/jpeg;base64,${image.data}`,
          );
        })
        .catch(function (error) {
          console.log('Error image :', error);
        });
    }, 1000);
  };

  const RemovePhoto = async () => {
    refRBSheet.current.close();
    await setImage('');
  };

  return (
    <View
      style={{
        width: '60%',
      }}>
      <Text
        style={[
          {
            color: COLORS.PrimaryBlack,
            fontSize: 18,
            fontFamily: FONTS.Regular,
            marginLeft: '4%',
          },
        ]}>
        Upload your photo
      </Text>

      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', margin: 8}}
        onPress={() => {
          openGallery();
        }}>
        <VECTOR_ICONS.EvilIcons name="image" size={25} />
        <Text
          style={[
            styles.Label,
            {color: COLORS.PrimaryBlack, marginLeft: '2%'},
          ]}>
          Upload from Gallery
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', margin: 8}}
        onPress={() => {
          takephoto();
        }}>
        <VECTOR_ICONS.Ionicons name="camera-outline" size={22} />
        <Text
          style={[
            styles.Label,
            {color: COLORS.PrimaryBlack, marginLeft: '2%'},
          ]}>
          Take Photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', margin: 8}}
        onPress={() => {
          RemovePhoto();
        }}>
        <VECTOR_ICONS.AntDesign name="delete" size={22} color={'red'} />
        <Text
          style={[
            styles.Label,
            {color: COLORS.PrimaryBlack, marginLeft: '2%'},
          ]}>
          Remove photo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickImageBottom;

const styles = StyleSheet.create({
  Label: {
    color: COLORS.White,
    fontSize: 16,
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
});
