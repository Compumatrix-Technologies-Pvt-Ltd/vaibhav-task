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
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../assets/Colors/Colors';
import {IMAGEPATH} from '../../assets/Images/Images';
import Button from '../../Components/Button';
import {FONTS} from '../../assets/fonts/Fonts';
import {Height_, Width_} from '../../Helpers/Dimentions';
import {Picker} from '@react-native-picker/picker';
import {VECTOR_ICONS} from '../../assets/Icons';
import ImageSelection from '../../Components/ImageSelection';
import {useMyContext} from '../../Context/MyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [Name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ModalVisible, setModalVisible] = useState(false);
  const {value} = useMyContext();
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from(
    {length: 100},
    (_, index) => currentYear - index,
  );

  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [ImageT, setImage] = useState('' || null);

  const GetImage = async () => {
    const ImageUri = await AsyncStorage.getItem('Profile');

    // setImage(ImageUri);
  };
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    console.log(value, 'value');
    GetImage(); 
  }, [value, ModalVisible]);

  const onAction = () => {};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <KeyboardAwareScrollView>
        <View
          style={styles.MainView}>
          <View>
            <Text
              style={styles.Heading}>
              Let’s get to know you
            </Text>
            <Text
              style={styles.subheading}>
              Let us get to know you a bit better so you can get the best out of
              us
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{marginTop: Height_ / 20}}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image
                source={
                  value === 'Avtar'
                    ? IMAGEPATH.Avtar2
                    : value === 'Image'
                    ? {uri: ImageT}
                    : IMAGEPATH.Profile
                }
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: 'contain',
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '90%', marginTop: Height_ / 17}}>
            <Text style={styles.Label}>
              First name <Text style={{color: '#DC2626'}}>*</Text>
            </Text>
            <View style={styles.InputView}>
              <TextInput
                value={Name}
                style={styles.Input}
                onChangeText={text => setName(text)}
                placeholder="John"
                placeholderTextColor={COLORS.PrimaryBlack}
              />
            </View>
            <Text style={styles.Label}>
              Last name <Text style={{color: '#DC2626'}}>*</Text>
            </Text>
            <View style={styles.InputView}>
              <TextInput
                value={LastName}
                style={styles.Input}
                onChangeText={text => setLastName(text)}
                placeholder="Blake"
                placeholderTextColor={COLORS.PrimaryBlack}
              />
            </View>
            <Text style={styles.Label}>
              Year of birth <Text style={{color: '#DC2626'}}>*</Text>
            </Text>
            <View style={[styles.InputView, {flexDirection: 'row'}]}>
              <Picker
                selectedValue={selectedYear}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                dropdownIconColor={COLORS.PrimaryBlack}
                selectionColor={'rgba(2, 6, 23, 0.85)'}
                onValueChange={itemValue =>
                  handleYearChange(itemValue as number)
                }>
                {years.map(year => (
                  <Picker.Item
                    key={year}
                    label={`${year}`}
                    value={year}
                    color={'rgba(2, 6, 23, 0.6)'}
                    fontFamily={FONTS.Regular}
                    style={{fontFamily: FONTS.Regular}}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View style={{marginTop: Height_ / 10}} />

          <Button Tittle={'Save'} Action={onAction} />
        </View>
      </KeyboardAwareScrollView>
      <Modal visible={ModalVisible}>
        <ImageSelection setModalVisible={setModalVisible} />
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  InputView: {
    marginTop: '2%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F8FAFC',
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(2, 6, 23, 0.06)',
  },
  Input: {
    width: '96%',
    fontFamily: FONTS.Regular,
    fontSize: 16,
    color: COLORS.PrimaryBlack,
  },
  picker: {
    height: 50,
    width: '100%',
    fontFamily: FONTS.Regular,
  },
  pickerItem: {
    fontFamily: FONTS.Regular,
    // color:'red',
    // backgroundColor:'red'
  },
  Label: {
    color: COLORS.PrimaryBlack,
    fontSize: 12,
    fontFamily: FONTS.Regular,
    marginTop: '2%',
  },
  MainView:{
    alignItems: 'center',
    alignSelf: 'center',
    width: Width_ * 0.95,
    marginTop: Height_ / 14,
  },
  Heading:{
    color: COLORS.PrimaryBlack,
    fontFamily: FONTS.Regular,
    fontSize: 20,
  },
  subheading:{
    color: COLORS.PrimaryBlack,
    fontFamily: FONTS.Regular,
    fontSize: 16,
    marginTop: '2%',
  }
});
