import * as React from "react";
import { View, Text, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import dummy from "../components/dummy";
import IntroSliderScreen from "../screens/StartUp/IntroSliderScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "../screens/ScreenNavigator/HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import PreferenceScreen from "../screens/StartUp/PreferenceScreen";
import ResetPasswordScreen from "../screens/Auth/ResetPasswordScreen";
import OpenQuizTaskScreen from "../screens/Quiz/OpenQuizTaskScreen";
import StartingQuizScreen from "../screens/Quiz/StartingQuizScreen";
import PathGeneration from "../screens/PathGeneration";

const INFSAPPNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/*<Stack.Screen
            name="Path"
            component={PathGeneration}
            options={{ headerShown: false }}
          />*/}
          <Stack.Screen
            name="Intro"
            component={IntroSliderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              headerTitleStyle: { fontFamily: "Poppins-Regular" },
              headerBackTitleStyle: { fontFamily: "Poppins-Regular" },
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              headerShown: false,
              headerTitleStyle: { fontFamily: "Poppins-Regular" },
              headerBackTitleStyle: { fontFamily: "Poppins-Regular" },
            }}
          />
          <Stack.Screen
            name="Dummy"
            component={dummy}
            options={{ title: "Path" }}
          />
          <Stack.Screen name="Preference" component={PreferenceScreen} />
          <Stack.Screen
            name="StudentDecision"
            component={OpenQuizTaskScreen}
            options={{
              headerShown: false,
              headerTitleStyle: { fontFamily: "Poppins-Regular" },
              headerBackTitleStyle: { fontFamily: "Poppins-Regular" },
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              /*  headerRight: () => (
            <Icon color='#20BEC9' name="ios-lock-open" size={25} style={{marginRight:15}} onPress={()=>{
              Alert.alert('Reset Password Here!')
            }}></Icon>
          ),
          */
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default INFSAPPNavigator;
