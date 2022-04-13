import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize'

export default class OtpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput1: '',
      textInput2: '',
      textInput3: '',
      textInput4: '',
      textInput5: '',
      textInput6: '',
      checked: false,
    };
  }
  componentDidMount() {
    this.refs.ti1.focus();
  }
  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>OTP</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.textInput}
              value={this.state.textInput1}
              ref={'ti1'}
              textAlign={'center'}
              keyboardType={'number-pad'}
              onChangeText={(t) => {
                if (t == '' || String(parseInt(t)) != 'NaN') {
                  this.setState({ textInput1: t.slice(t.length - 1) });
                  this.refs.ti2.focus();
                }
              }}
            />
            <TextInput
              style={styles.textInput}
              ref={'ti2'}
              value={this.state.textInput2}
              textAlign={'center'}
              keyboardType={'number-pad'}
              onChangeText={(t) => {
                if (t == '' || String(parseInt(t)) != 'NaN') {
                  this.setState({ textInput2: t.slice(t.length - 1) });
                  this.refs.ti3.focus();
                }
              }}
            />
            <TextInput
              style={styles.textInput}
              ref={'ti3'}
              value={this.state.textInput3}
              textAlign={'center'}
              keyboardType={'number-pad'}
              onChangeText={(t) => {
                if (t == '' || String(parseInt(t)) != 'NaN') {
                  this.setState({ textInput3: t.slice(t.length - 1) });
                  this.refs.ti4.focus();
                }
              }}
            />
            <TextInput
              style={styles.textInput}
              ref={'ti4'}
              value={this.state.textInput4}
              textAlign={'center'}
              keyboardType={'number-pad'}
              onChangeText={(t) => {
                if (t == '' || String(parseInt(t)) != 'NaN') {
                  this.setState({ textInput4: t.slice(t.length - 1) });
                  this.refs.ti5.focus();
                }
              }}
            />
            <TextInput
              style={styles.textInput}
              ref={'ti5'}
              value={this.state.textInput5}
              textAlign={'center'}
              keyboardType={'number-pad'}
              onChangeText={(t) => {
                if (t == '' || String(parseInt(t)) != 'NaN') {
                  this.setState({ textInput5: t.slice(t.length - 1) });
                  this.refs.ti6.focus();
                }
              }}
            />
            <TextInput
              style={styles.textInput}
              ref={'ti6'}
              value={this.state.textInput6}
              textAlign={'center'}
              keyboardType={'number-pad'}
              onChangeText={(t) => {
                if (t == '' || String(parseInt(t)) != 'NaN') {
                  this.setState({ textInput6: t.slice(t.length - 1) });
                  this.refs.ti6.blur();
                }
              }}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={this.state.checked ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({ checked: !this.state.checked });
              }}
              color={'#E5634D'}
              uncheckedColor={'#E5634D'}
            />
            <Text style={styles.noButtonText}>Please accept the </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://github.com/kritiarora143')
              }>
              <Text style={styles.buttonText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.noButtonText}> and </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://github.com/kritiarora143')
              }>
              <Text style={styles.buttonText}>User Agreement</Text>
            </TouchableOpacity>
            <Text style={styles.noButtonText}>.</Text>
          </View>

          <TouchableOpacity
            style={!this.state.checked ? styles.button : styles.buttonEnabled}
            disabled={!this.state.checked}
            onPress={() => this.props.navigation.navigate('PhoneNumScreen')}>
            <Text style={styles.mainButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
  
  button: {
    marginTop: 30,
    width: '90%',
    padding: RFValue(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
    borderRadius: RFValue(5),
  },
  buttonEnabled: {
    marginTop: 30,
    width: '90%',
    padding: RFValue(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5634D',
    borderRadius: RFValue(5),
  },
  textInput: {
    paddingVertical: 0,
    // backgroundColor: '#fff',
    marginHorizontal: RFValue(5),
    borderWidth: 2,
    borderColor: '#E5634D',
    borderRadius: 5,
    height: '100%',
    width: '12%',
    color: '#fff',
    fontSize: RFValue(15),
  },
  inputsContainer: {
    flexDirection: 'row',
    height: Dimensions.get('window').scale * 20,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(15),
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RFValue(15),
    width: '100%',
    paddingHorizontal: RFValue(25),
    flexWrap: 'wrap',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(10),
    textDecorationLine: 'underline',
  },
  noButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(10),
  },
  mainButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(15),
  },
});
