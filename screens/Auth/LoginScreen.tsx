import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../constants/colors';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';

const LoginScreen = props => {
  const [isSignUpClicked, setIsSignUpClicked] = useState(true);
  const [isLoginClicked, setIsLoginlicked] = useState(false);

  const Login = () => {
    const [radioData, setRadioData] = useState(['Remember Me!']);
    const [radioChecked, setRadioChecked] = useState(0);
    useEffect(() => {
      setRadioChecked(-1);
    }, []);
    return (
      <View style={{marginBottom: 60}}>
        <Card
          style={{
            marginHorizontal: 20,
            height: 50,
            justifyContent: 'center',
            borderRadius: 20,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <View style={{justifyContent: 'center'}}>
              <Icon name="md-mail" size={23} color="black" />
            </View>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{marginHorizontal: 10, height: '100%'}}
            />
          </View>
        </Card>
        <Card
          style={{
            marginHorizontal: 20,
            height: 50,
            marginVertical: 10,
            justifyContent: 'center',
            borderRadius: 20,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Icon name="lock-closed" size={23} color="black" />
            <TextInput
              placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry
              style={{marginHorizontal: 10}}
            />
          </View>
        </Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          {radioData.map((data, key) => {
            return (
              <View key={key}>
                {radioChecked == key ? (
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      setRadioChecked(-1);
                    }}>
                    <Icon name="md-checkmark-circle" size={23}></Icon>
                    <Text>{data}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setRadioChecked(key);
                      console.log('Key', key);
                    }}
                    style={styles.btn}>
                    <Icon name="radio-button-off" size={23}></Icon>
                    <Text>{data}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
          <Text
            onPress={() => {
              props.navigation.navigate('ForgotPassword');
            }}
            style={{marginRight: 20, textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </View>
      </View>
    );
  };

  const SignUp = () => {
    return (
      <View style={{marginBottom: 20}}>
        <Card
          style={{
            marginHorizontal: 20,
            height: 50,
            justifyContent: 'center',
            borderRadius: 20,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Icon name="person" size={23} color="black" />
            <TextInput
              placeholder="UserName"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{marginHorizontal: 10}}
            />
          </View>
        </Card>
        <Card
          style={{
            marginHorizontal: 20,
            height: 50,
            marginTop: 10,
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
        </Card>
        <Card
          style={{
            marginHorizontal: 20,
            height: 50,
            marginVertical: 10,
            justifyContent: 'center',
            borderRadius: 20,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Icon name="lock-closed" size={23} color="black" />
            <TextInput
              placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry
              style={{marginHorizontal: 10}}
            />
          </View>
        </Card>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              fontWeight: 'bold',
              alignContent: 'center',
            }}>
            By pressing submit you are aggree to our
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              marginVertical: 10,
              marginBottom: 40,
              fontWeight: 'bold',
              alignContent: 'center',
              textDecorationLine: 'underline',
            }}>
            Terms & condition
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'grey',
      }}>
      <View>
        <View
          style={{
            backgroundColor: Colors.background,
            marginBottom: 20,
          }}>
          <View>
            {!isSignUpClicked ? (
              <Text
                style={{
                  fontSize: 30,
                  marginTop: '30%',
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                Welcome
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 110,
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                Hello!
              </Text>
            )}
            {!isSignUpClicked ? (
              <Text
                style={{
                  marginHorizontal: 20,
                  color: 'white',
                  fontSize: 16,
                  marginVertical: 10,
                  marginBottom: 120,
                }}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </Text>
            ) : (
              <Text
                style={{
                  marginHorizontal: 20,
                  color: 'white',
                  fontSize: 16,
                  marginVertical: 10,
                  marginBottom: 120,
                }}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text.
              </Text>
            )}
          </View>
        </View>

        <View>
          <Card style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                marginVertical: 20,
              }}>
              <View>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold'}}
                  onPress={() => {
                    setIsLoginlicked(true);
                    setIsSignUpClicked(false);
                  }}>
                  Login
                </Text>
                {isLoginClicked ? (
                  <View
                    style={{
                      width: 50,
                      height: 2,
                      marginTop: 5,
                      backgroundColor: '#222',
                    }}></View>
                ) : null}
              </View>

              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold'}}
                  onPress={() => {
                    setIsLoginlicked(false);
                    setIsSignUpClicked(true);
                  }}>
                  SignUp
                </Text>
                {isSignUpClicked ? (
                  <View
                    style={{
                      width: 60,
                      height: 2,
                      marginTop: 5,
                      backgroundColor: '#222',
                    }}></View>
                ) : null}
              </View>
            </View>
            <View>{isLoginClicked ? <Login /> : <SignUp />}</View>
          </Card>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                loginLog.info('Login Buuton Clicked');
                props.navigation.navigate('Tabs');
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          marginBottom: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <FAB
          style={styles.socialButton}
          small
          color="#222"
          icon="facebook"
          onPress={() => console.log('Pressed')}
        />
        <FAB
          style={styles.socialButton}
          small
          icon="google"
          color="#222"
          onPress={() => console.log('Pressed')}
        />
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

export default LoginScreen;