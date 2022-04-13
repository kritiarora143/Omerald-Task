import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Header } from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';
import {RFValue} from "react-native-responsive-fontsize"

const PhoneNumScreen = ({ navigation }) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log In</Text>
      </View>
      <View style={styles.container}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="IN"
          layout="first"
          withShadow
          // autoFocus
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={(text) => {
            setphoneNumber(text);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    flex: 0.1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    width: '90%',
    height: RFValue(70),
  },
  button: {
    marginTop: 30,
    width: '90%',
    padding: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5634D',
    borderRadius: RFValue(5),
  },
  
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(17),
  },
});

export default PhoneNumScreen;
