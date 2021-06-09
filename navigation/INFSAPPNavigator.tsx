import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dummy from '../components/dummy';
import IntroSliderScreen from '../screens/StartUp/IntroSliderScreen';

const INFSAPPNavigator=()=>{
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Intro" component={IntroSliderScreen} options={{headerShown:false}} />
            <Stack.Screen name="Dummy" component={dummy} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default INFSAPPNavigator;