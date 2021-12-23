import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import Colors from "../../constants/colors";
import Card from "../../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, ActivityIndicator } from "react-native-paper";
import { WithLocalSvg } from "react-native-svg";
import RoundedButton from "../../components/RoundedButton";

const { width, height } = Dimensions.get("window");

const Login = (props) => {
  const [radioData, setRadioData] = useState(["Remember Me"]);
  const [radioChecked, setRadioChecked] = useState(0);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setRadioChecked(-1);
  }, []);

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            height: 50,
            borderRadius: 15,
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#D1D1D1",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            overflow: "hidden",
          }}
        >
          <Icon name="person" size={23} color="#838383" />
          <TextInput
            value={username}
            keyboardType="email-address"
            onChangeText={(name) => setUserName(name)}
            placeholder="UserName / Email"
            style={{
              width: "90%",
              backgroundColor: "transparent",
              color: "#B7B7B7",
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>
        <View
          style={{
            height: 50,
            borderRadius: 15,
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            borderColor: "#D1D1D1",
            overflow: "hidden",
          }}
        >
          <Icon name="lock-closed" size={23} color="#838383" />
          <TextInput
            value={password}
            secureTextEntry
            keyboardType="email-address"
            onChangeText={(name) => setPassword(name)}
            placeholder="Password"
            style={{
              width: "90%",
              backgroundColor: "transparent",
              color: "#B7B7B7",
            }}
          />
        </View>
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 5 }}>
        {radioData.map((data, key) => {
          return (
            <View key={key}>
              {radioChecked == key ? (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    setRadioChecked(-1);
                  }}
                >
                  <Icon
                    color="#838383"
                    name="md-checkmark-circle"
                    size={23}
                  ></Icon>
                  <Text
                    style={{ fontFamily: "Poppins-Regular", marginLeft: 5 }}
                  >
                    {data}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setRadioChecked(key);
                    console.log("Key", key);
                  }}
                  style={styles.btn}
                >
                  <Icon
                    color="#838383"
                    name="radio-button-off"
                    size={23}
                  ></Icon>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      marginLeft: 5,
                      color: "#838383",
                    }}
                  >
                    {data}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 40,
          marginHorizontal: 10,
        }}
      >
        <Text
          onPress={() => {
            //props.navigation.navigate("ForgotPassword");
            props.navigation.navigate("ForgotPassword");
          }}
          style={{
            marginLeft: 20,
            textDecorationLine: "underline",
            fontFamily: "Poppins-Regular",
            color: "#707070",
          }}
        >
          Forgot UserName?
        </Text>

        <Text
          onPress={() => {
            props.navigation.navigate("ForgotPassword");
          }}
          style={{
            marginRight: 20,
            textDecorationLine: "underline",
            fontFamily: "Poppins-Regular",
            color: "#707070",
          }}
        >
          Forgot Password?
        </Text>
      </View>
      <RoundedButton
        onPress={() => {
          setIsDone(true);
          setTimeout(() => {
            props.navigation.navigate("Home");
            setIsDone(false);
          }, 2000);
        }}
        title="Login"
        textVisible={true}
        visible={true}
        name="md-arrow-forward-circle"
      />

      {isDone ? <ActivityIndicator style={{ marginTop: 20 }} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    color: "#838383",
  },
});

export default Login;
