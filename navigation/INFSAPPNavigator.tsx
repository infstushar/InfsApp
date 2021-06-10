import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dummy from '../components/dummy';
import IntroSliderScreen from '../screens/StartUp/IntroSliderScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
const INFSAPPNavigator=()=>{
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Intro" component={IntroSliderScreen} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false,headerTitleStyle:{ fontFamily:'Poppins-Regular'},headerBackTitleStyle:{fontFamily:'Poppins-Regular'}}} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown:true, headerTitleStyle:{ fontFamily:'Poppins-Regular'},headerBackTitleStyle:{fontFamily:'Poppins-Regular'}}} />
          <Stack.Screen name="Dummy" component={dummy} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default INFSAPPNavigator;