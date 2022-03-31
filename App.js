
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator, StyleSheet, Text, View, useColorScheme } from "react-native";
import Splash from './src/screen/Splash'
import SignIn from './src/screen/SignIn';
import Account from './src/screen/Account';
import AddTurnover from './src/screen/AddTurnover';
import ForgotPassword from './src/screen/ForgotPassword';
import ResetPassword from './src/screen/ResetPassword';
import Turnover from './src/screen/Turnover';
import VerificationCode from './src/screen/VerificationCode';
import Welcome from './src/screen/Welcome';


const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignIn'}
      >
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Account" component={Account} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AddTurnover" component={AddTurnover} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Turnover" component={Turnover} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

App.propTypes = {

};

export default App;