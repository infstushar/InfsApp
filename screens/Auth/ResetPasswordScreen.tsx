import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import Colors from "../../constants/colors";
import Card from "../../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { FAB, TextInput, Button } from "react-native-paper";
//import {SafeAreaView} from 'react-navigation';
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

const ResetPasswordScreen = (props: { navigation: { goBack: () => void } }) => {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: Colors.resetpassbg,
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
              preserveAspectRatio="xMinYMin slice"
              asset={require("../../assets/Background-2.svg")}
            />
          </View>
          <View>
            <SafeAreaView>
              <Icon
                onPress={() => {
                  props.navigation.goBack();
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
                color: "white",
                marginHorizontal: 20,
                fontFamily: "Poppins-Bold",
              }}
            >
              Set New Password
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
              Please check your inbox and click on the {"\n"}received link to
              reset your password
            </Text>
          </View>
        </View>

        <View>
          <Card style={styles.card}>
            <View style={{ marginTop: 20 }}></View>
            <WithLocalSvg
              width="100%"
              height="40%"
              asset={require("../../assets/Vector_3.svg")}
            />
            <View
              style={{ marginHorizontal: 20, marginBottom: 10, marginTop: 10 }}
            >
              <View
                style={{
                  height: 45,
                  borderRadius: 15,
                  borderWidth: 1,
                  flexDirection: "row",
                  borderColor: "#D1D1D1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20,
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  overflow: "hidden",
                }}
              >
                <Icon name="lock-closed" size={19} color="#838383" />
                <TextInput
                  value={password}
                  onChangeText={(name) => setPassword(name)}
                  keyboardType="email-address"
                  placeholder="Enter New Password"
                  style={{
                    width: "90%",
                    backgroundColor: "transparent",
                    color: "#B7B7B7",
                    fontFamily: "Poppin-Regular",
                    fontSize: normalize(15.75),
                  }}
                />
              </View>
              <View
                style={{
                  height: 45,
                  borderRadius: 15,
                  borderWidth: 1,
                  flexDirection: "row",
                  borderColor: "#D1D1D1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20,
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  overflow: "hidden",
                }}
              >
                <Icon name="lock-closed" size={19} color="#838383" />
                <TextInput
                  value={cpassword}
                  onChangeText={(name) => setCPassword(name)}
                  keyboardType="email-address"
                  placeholder="Confirm New Password"
                  style={{
                    width: "90%",
                    backgroundColor: "transparent",
                    color: "#B7B7B7",
                    fontFamily: "Poppin-Regular",
                    fontSize: normalize(15.75),
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                //setIsEmailSent(true);
                Alert.alert("Password Changed");
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
                  color: "#FFFFFF",
                  fontSize: normalize(21),
                  fontFamily: "Poppins-Regular",
                }}
              >
                Change Password
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

export default ResetPasswordScreen;
