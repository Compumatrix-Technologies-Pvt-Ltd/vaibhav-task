import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../assets/Colors/Colors';
import { FONTS } from '../../assets/fonts/Fonts';


const Login = (props: any) => {
  const [Loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [ErrorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setErrorPassword] = useState('');

  var passwordValidate = password => {
    var Regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('Password is required.');
    } else if (!Regex.test(password)) {
      setErrorPassword(
        'Please enter a password with at least 8 characters, 1 number, 1 uppercase letter, 1 lowercase and 1 special character. ',
      );
    } else {
      setErrorPassword(null);
      return true;
    }
  };

  var emailValidate = email => {
    var Regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (email === '' || email === undefined || email === null) {
      setErrorEmail('Enter email address.');

      return false;
    } else if (!Regex.test(email)) {
      setErrorEmail('Enter a valid email address.');

      return false;
    } else {
      setErrorEmail(null);

      return true;
    }
  };

  const validate = () => {
    if (emailValidate(email) && passwordValidate(password)) {
      props.navigation.navigate('HomeScreen');
    } else {
      emailValidate(email);
      // EmailverificationcodeValidate(Emailcode)
      passwordValidate(password);

      return false;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222525'}}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: '10%',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.LightBlue,
              marginTop: '20%',
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 40,
              fontWeight:'bold'
            }}>
            LOGO
          </Text>
          <Text style={{marginTop: '10%', fontSize: 20, color:COLORS.White, fontFamily:FONTS.Regular}}>
            Login to continue
          </Text>
          <Text style={styles.Text}> Email </Text>
          <TextInput
            style={[
              styles.PasswordInput,
              {
                width: '80%',
              },
            ]}
            placeholder="Enter your Email"
            placeholderTextColor={'#6F6F6F'}
            // placeholderfontsize={12}
            maxLength={256}
            value={email}
            onChangeText={text => {
              setEmail(text), emailValidate(text);
            }}
            autoComplete={'off'}
          />

          {ErrorEmail ? (
            <Text style={[{marginTop: '1%', width: '80%', color: '#FB4000'}]}>
              {ErrorEmail}
            </Text>
          ) : null}
          <Text style={styles.Text}> Password </Text>
          <TextInput
            style={styles.PasswordInput}
            placeholder="**********  "
            placeholderTextColor={'#6F6F6F'}
          

            value={password}
            onChangeText={text => {
              setPassword(text), passwordValidate(text);
            }}
            autoComplete={'off'}
          />
          {passwordError ? (
            <Text style={[{width: '80%', marginTop: '1%', color: '#FB4000'}]}>
              {passwordError}
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={validate}
            style={[styles.ButtonView, {marginTop: '10%'}]}>
            <Text style={styles.ButtonText}>Log In</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
    ButtonView: {
      width: '80%',
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
      fontFamily: 'Poppins-Medium',
    },
    Text: {
      color: 'white',
      width: '80%',
      marginTop: '5%',
    },
    PasswordInput: {
      width: '80%',
      backgroundColor: '#E3E0E0',
      borderRadius: 10,
      marginTop: '2%',
      color: 'black',
      padding: 10,
    },
  });
