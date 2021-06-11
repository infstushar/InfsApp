import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,SafeAreaView, Alert} from 'react-native';
import Colors from '../../constants/colors';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB,TextInput,Button} from 'react-native-paper';
//import {SafeAreaView} from 'react-navigation';
import {WithLocalSvg}  from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

const ResetPasswordScreen = (props: { navigation: { goBack: () => void; }; }) => {
  const[password,setPassword]=useState('');
  const[cpassword,setCPassword]=useState('');
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
        <View>
          <View
            style={{
              backgroundColor: Colors.resetpassbg,
            }}>
            <View>
              <SafeAreaView>
                <Icon
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                  size={24}
                  color="white"
                  name="arrow-back"
                  style={{marginHorizontal: 20}}
                />
                </SafeAreaView>
              <Text
                style={{
                  fontSize: 30,
                  marginTop:'10%',
                  color: 'white',
                  marginHorizontal: 20,
                  fontFamily:'Poppins-Bold'
                }}>
                Set New Password
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: 'white',
                  fontSize: 16,
                  marginVertical: 10,
                  marginBottom: 120,
                  fontFamily:'Poppins-Regular'
                }}>
                Please check your inbox and click in the received link to reset a password
              </Text>
            </View>
          </View>

          <View>
            <Card style={styles.card}>
            <View style={{marginTop:20}}></View>
            <WithLocalSvg
              width="100%"
              height="35%"
              asset={require('../../assets/resetpassword.svg')}
             />
             <View style={{marginHorizontal:20,marginBottom:30,marginTop:20}}>
          <TextInput
          style={{fontFamily:'Poppins-Regular'}}
            label="Enter New Password"
            mode="outlined"
            value={password}
            secureTextEntry
            onChangeText={(name)=>setPassword(name)}
            left={<TextInput.Icon name="lock" size={23} color="black" />}/>
            <TextInput
            style={{fontFamily:'Poppins-Regular',marginTop:10}}
            label="Confirm Password"
            mode="outlined"
            value={cpassword}
            secureTextEntry
            onChangeText={(name)=>setCPassword(name)}
            left={<TextInput.Icon name="lock" size={23} color="black" />}/>
    </View>
            <TouchableOpacity 
        onPress={()=>{
            //setIsEmailSent(true);
            Alert.alert('Reset API Call will called Here!!')
        }}
        style={{flexDirection:'row', height:40,
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20,
        borderRadius:40,backgroundColor:Colors.textColor,}}>
            <Text  style={{flex:1,textAlign:'center',
            paddingLeft:40,color:'white',fontSize:18,
            fontFamily:'Poppins-Regular'}}>Submit</Text>
            <View style={{alignItems:'flex-end',
            justifyContent:'flex-end',paddingRight:10}}>
            <Icon  name='md-arrow-forward-circle' color='white' size={33}></Icon>
            </View>
       </TouchableOpacity>
              
    </Card>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: -100,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  fab: {
    right: 0,
    bottom: 0,
    marginTop: -30,
    backgroundColor: 'white',
    elevation: 10,
  },
  fabS: {
    right: 0,
    bottom: 0,
    marginTop: -48,
    elevation: 10,
    backgroundColor: '#4e4e4e',
  },
  submitButton: {
    bottom: 0,
    left: 0,
  },
  socialButton: {
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
});

export default ResetPasswordScreen;