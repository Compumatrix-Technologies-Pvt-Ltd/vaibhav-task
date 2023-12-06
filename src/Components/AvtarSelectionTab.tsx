import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGEPATH} from '../assets/Images/Images';
import AvatarList from './AvatarList';
import SaveButton from './SaveButton';
import {useMyContext} from '../Context/MyContext';

const AvtarSelectionTab = ({setModalVisible}: any) => {
  const {value, setValue} = useMyContext();
  const OnSave = async () => {
    await setValue('Avtar');
    setModalVisible(false);
  };
  return (
    <View style={{flex: 1}}>
      <AvatarList />

      <SaveButton Tittle={'Save'} Action={OnSave} />
    </View>
  );
};

export default AvtarSelectionTab;

const styles = StyleSheet.create({});
