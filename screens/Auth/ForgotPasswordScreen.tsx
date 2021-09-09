import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
  Platform,
  PixelRatio,
} from "react-native";
import Colors from "../../constants/colors";
import Card from "../../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, Button } from "react-native-paper";
import { WithLocalSvg } from "react-native-svg";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const scale = width / 415;
const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS == "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const ForgotPasswordScreen = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
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
                  size={19}
                  color="white"
                  name="arrow-back"
                  style={{ marginHorizontal: 10 }}
                />
              </SafeAreaView>
              <Text
                style={{
                  fontSize: normalize(31.5),
                  marginTop: "10%",
                  color: "#FFFFFF",
                  marginHorizontal: 20,
                  fontFamily: "Poppins-Bold",
                }}
              >
                Email has been sent!
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: "#FFFFFF",
                  fontSize: normalize(17.5),
                  marginVertical: 10,
                  marginBottom: 120,
                  fontFamily: "Poppins-Regular",
                }}
              >
                We have sent you an email with a link to{"\n"} reset your
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
                    marginTop: height * 0.08,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Medium",
                      color: "#3E3E3E",
                      fontSize: normalize(21),
                    }}
                  >
                    Didn't receive the link?
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      marginTop: 10,
                      color: "#00B5E0",
                      fontFamily: "Poppins-Regular",
                      fontSize: normalize(15.75),
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
            <View
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 10,
                left: -50,
                right: 10,
              }}
            >
              <WithLocalSvg
                width={width + 80}
                height={225}
                preserveAspectRatio="xMinYMin slice"
                asset={require("../../assets/Texture-4.svg")}
              />
            </View>
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
                  fontSize: normalize(31.5),
                  marginTop: "10%",
                  color: "#FFFFFF",
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
                  fontSize: normalize(17.5),
                  marginVertical: 10,
                  marginBottom: 120,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Enter your registered email below to get a{"\n"} link to reset
                your password
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 20, marginTop: 30 }}>
            <Card style={styles.card}>
              <View style={{ marginTop: 20 }}></View>
              <WithLocalSvg
                width="100%"
                height="50%"
                asset={require("../../assets/Vector_1-2.svg")}
              />

              <View
                style={{
                  height: 50,
                  borderRadius: 15,
                  borderWidth: 1,
                  flexDirection: "row",
                  borderColor: "#D1D1D1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20,
                  marginVertical: 20,
                  paddingHorizontal: 10,
                  overflow: "hidden",
                }}
              >
                <Icon name="mail" size={19} color="#838383" />
                <TextInput
                  value={username}
                  onChangeText={(name) => setUserName(name)}
                  keyboardType="email-address"
                  placeholder="Enter Register Email Address"
                  style={{
                    width: "90%",
                    backgroundColor: "transparent",
                    fontSize: normalize(14),
                    fontFamily: "Poppins-Regular",
                    color: "#B7B7B7",
                  }}
                />
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
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    paddingLeft: 40,
                    color: "white",
                    fontSize: normalize(18),
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
                ></View>
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
    marginTop: -120,
    height: height * 0.57,
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
