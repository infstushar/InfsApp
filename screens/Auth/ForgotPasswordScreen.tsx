import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import Colors from "../../constants/colors";
import Card from "../../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, Button } from "react-native-paper";
import { WithLocalSvg } from "react-native-svg";
import { TouchableOpacity } from "react-native";


const ForgotPasswordScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [username, setUserName] = useState("");
  const SentEmail = () => {
    return (
      <View>
        <View>
          <View
            style={{
              backgroundColor: Colors.forgotbgsent,
              marginBottom: 20,
            }}
          >
            <View>
              <SafeAreaView>
                <Icon
                  onPress={() => {
                    setIsEmailSent(false);
                  }}
                  size={24}
                  color="white"
                  name="arrow-back"
                  style={{ marginHorizontal: 10 }}
                />
              </SafeAreaView>
              <Text
                style={{
                  fontSize: 30,
                  marginTop: "10%",
                  color: "white",
                  marginHorizontal: 20,
                  fontFamily: "Poppins-Bold",
                }}
              >
                Email has been sent!
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: "white",
                  fontSize: 16,
                  marginVertical: 10,
                  marginBottom: 120,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Please check your inbox and click on received link to reset a
                password
              </Text>
            </View>
          </View>

          <View>
            <Card style={styles.card}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ marginTop: 40 }}></View>
                {/* <Icon name="md-mail" size={80} color="black" />*/}
                <WithLocalSvg
                  width="100%"
                  height="50%"
                  asset={require("../../assets/fpsent.svg")}
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <Text style={{ fontFamily: "Poppins-Regular" }}>
                    Didn't receive the link?
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      marginTop: 10,
                      color: "#20BEC9",
                      fontFamily: "Poppins-Regular",
                    }}
                    onPress={() => {
                      // Alert.alert('Email Resend Functionality Will Be Called Here!')
                      setIsEmailSent(false);
                    }}
                  >
                    Resend
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      {!isEmailSent ? (
        <View>
          <View
            style={{
              backgroundColor: Colors.forgotbg,
            }}
          >
            <View>
              <SafeAreaView>
                <Icon
                  onPress={() => {
                    props.navigation.navigate("Login");
                  }}
                  size={24}
                  color="white"
                  name="arrow-back"
                  style={{ marginHorizontal: 20 }}
                />
              </SafeAreaView>
              <Text
                style={{
                  fontSize: 30,
                  marginTop: "10%",
                  color: "white",
                  marginHorizontal: 20,
                  fontFamily: "Poppins-Bold",
                }}
              >
                Forgot Password
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: "white",
                  fontSize: 16,
                  marginVertical: 10,
                  marginBottom: 120,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Enter your registered email below to receive password reset
                instruction
              </Text>
            </View>
          </View>

          <View>
            <Card style={styles.card}>
              <View style={{ marginTop: 20 }}></View>
              <WithLocalSvg
                width="100%"
                height="35%"
                asset={require("../../assets/fp.svg")}
              />
              <View
                style={{
                  marginHorizontal: 20,
                  marginBottom: 30,
                  marginTop: 20,
                }}
              >
                <TextInput
                  style={{ fontFamily: "Poppins-Regular" }}
                  label="Registered Email"
                  mode="outlined"
                  keyboardType="email-address"
                  value={username}
                  onChangeText={(name) => setUserName(name)}
                  left={
                    <TextInput.Icon name="account" size={23} color="#838383" />
                  }
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  Remember Password?
                </Text>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    marginTop: 10,
                    color: "#20BEC9",
                    fontFamily: "Poppins-Regular",
                  }}
                  onPress={() => {
                    props.navigation.navigate("Login");
                  }}
                >
                  Login
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsEmailSent(true);
                }}
                style={{
                  flexDirection: "row",
                  height: 40,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 20,
                  borderRadius: 40,
                  backgroundColor: Colors.textColor,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    paddingLeft: 40,
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Submit
                </Text>
                <View
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    paddingRight: 10,
                  }}
                >
                  <Icon
                    name="md-arrow-forward-circle"
                    color="white"
                    size={33}
                  ></Icon>
                </View>
              </TouchableOpacity>
            </Card>
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
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  fab: {
    right: 0,
    bottom: 0,
    marginTop: -30,
    backgroundColor: "white",
    elevation: 10,
  },
  fabS: {
    right: 0,
    bottom: 0,
    marginTop: -48,
    elevation: 10,
    backgroundColor: "#4e4e4e",
  },
  submitButton: {
    bottom: 0,
    left: 0,
  },
  socialButton: {
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});

export default ForgotPasswordScreen;
