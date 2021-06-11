import React from 'react';
import {  View,Text ,StyleSheet} from 'react-native';
import dummy from '../../components/dummy';
import Colors from '../../constants/colors';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../../screens/ScreenNavigator/BookScreen';
import ResetPasswordScreen from '../..//screens/Auth/ResetPasswordScreen';
const Tab = createMaterialBottomTabNavigator();
function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }

  const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Profile" component={dummy} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const BottomTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        shifting={false}
        barStyle={{backgroundColor:'white'}}
        activeColor={Colors.textColor}
        sceneAnimationEnabled={false}>
           <Tab.Screen
          name="Profile"
          component={HomeStackScreen}
          options={{
            tabBarIcon: 'account',
          }}
        />
        <Tab.Screen
          name="Path"
          component={BookScreen}
          
          options={{
              title:'Path',
            tabBarIcon: 'navigation',
          }}
        />
        <Tab.Screen
          name="Book"
          component={BookScreen}
          options={{
            tabBarIcon: 'book',
          }}
        />
        <Tab.Screen
          name="Live"
          component={BookScreen}
          options={{
            tabBarIcon: 'video',
          }}
        />

       <Tab.Screen
          name="Feeds"
          component={BookScreen}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
 
      
      </Tab.Navigator>
    )};
const HomeScreen =()=>{
    return <BottomTabs/>
}



const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default HomeScreen;