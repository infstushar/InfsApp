import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import Colors from '../../constants/colors';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB,TextInput,Button} from 'react-native-paper';
//import {SafeAreaView} from 'react-navigation';
import {WithLocalSvg}  from 'react-native-svg';

const ForgotPasswordScreen = props => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const[username,setUserName]=useState('');
  const SentEmail = () => {
    return (
      <View>
        <View>
          <View
            style={{
              backgroundColor: Colors.forgotbgsent,
              marginBottom: 20,
            }}>
            <View>
              <SafeAreaView>
                <Icon
                  onPress={() => {
                    setIsEmailSent(false);
                  }}
                  size={24}
                  color="white"
                  name="arrow-back"
                  style={{marginTop: 20, marginHorizontal: 10}}
                />
                </SafeAreaView>
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 40,
                  color: 'white',
                  marginHorizontal: 20,
                 fontFamily:'Poppins-Bold'
                }}>
                Email has been sent!
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
                Please check your inbox and click on received link to reset a
                password
              </Text>
            </View>
          </View>

          <View>
            <Card style={styles.card}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  
                }}>
                    <View style={{marginTop:40}}></View>
               {/* <Icon name="md-mail" size={80} color="black" />*/}
               <WithLocalSvg
              width="100%"
              height="50%"
              asset={require('../../assets/fpsent.svg')}
             />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:30,
                   
                  }}>
                  <Text style={{ fontFamily:'Poppins-Regular'}}>Didn't receive the link?</Text>
                  <Text style={{textDecorationLine: 'underline',marginTop:10,color:'#20BEC9', fontFamily:'Poppins-Regular'}}>Resend</Text>
                </View>
              </View>
            </Card>

           {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FAB
                style={styles.fab}
                large
                icon="arrow-right"
                onPress={() => console.log('Pressed')}></FAB>
              <FAB
                style={styles.fabS}
                small
                icon="arrow-right"
                onPress={() => {
                  setIsEmailSent(true);
                }}
              />
            </View>*/}
            </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      {!isEmailSent ? (
        <View>
          <View
            style={{
              backgroundColor: Colors.forgotbg,
              marginBottom: 20,
            }}>
            <View>
              {/*<SafeAreaView>
                <Icon
                  onPress={() => {
                    props.navigation.navigate('Login');
                  }}
                  size={24}
                  color="white"
                  name="arrow-back"
                  style={{marginTop: 40, marginHorizontal: 20}}
                />
                </SafeAreaView>*/}
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 40,
                  color: 'white',
                  marginHorizontal: 20,
                  fontFamily:'Poppins-Bold'
                }}>
                Forgot Password
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
                Enter your registered email below to receive password reset
                instruction
              </Text>
            </View>
          </View>

          <View>
            <Card style={styles.card}>
            <View style={{marginTop:20}}></View>
            <WithLocalSvg
              width="100%"
              height="35%"
              asset={require('../../assets/fp.svg')}
             />
             {/* <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="md-mail" size={80} color="black" />
              </View>
              <Card
                style={{
                  marginHorizontal: 20,
                  height: 50,
                  marginVertical: 30,
                  justifyContent: 'center',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <View style={{flexDirection: 'row', padding: 10}}>
                  <Icon name="md-mail" size={23} color="black" />
                  <TextInput
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{marginHorizontal: 10}}
                  />
                </View>
            </Card>*/}
             <View style={{marginHorizontal:20,marginBottom:30,marginTop:20}}>
          <TextInput
          style={{fontFamily:'Poppins-Regular'}}
            label="Registered Email"
            mode="outlined"
            value={username}
            onChangeText={(name)=>setUserName(name)}
            left={<TextInput.Icon name="account" size={23} color="black" />}/>
    </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                  
                }}>
                <Text style={{fontFamily:'Poppins-Regular'}}>Remember Password?</Text>
                <Text style={{textDecorationLine: 'underline',marginTop:10,color:'#20BEC9',fontFamily:'Poppins-Regular'}}>Login</Text>
              </View>
              <View style={{marginHorizontal:20,marginBottom:10}}>
        <Button  mode="contained" color={Colors.primaryColor} onPress={() => {
                  setIsEmailSent(true);
                }}><Text style={{color:'white',fontFamily:'Poppins-Regular'}}>Submit</Text>
  </Button>
  </View>
              
            </Card>

           {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FAB
                style={styles.fab}
                large
                icon="arrow-right"
                onPress={() => console.log('Pressed')}></FAB>
              <FAB
                style={styles.fabS}
                small
                icon="arrow-right"
                onPress={() => {
                  setIsEmailSent(true);
                }}
              />
            </View>*/}
          </View>
        </View>
      ) : (
        <SentEmail />
      )}
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

export default ForgotPasswordScreen;