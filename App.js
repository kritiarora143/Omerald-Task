import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneNumScreen from './Screens/PhoneNumber';
import OtpScreen from './Screens/OtpScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={'PhoneNumScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PhoneNumScreen" component={PhoneNumScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

