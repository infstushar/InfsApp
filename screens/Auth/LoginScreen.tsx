import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import Colors from "../../constants/colors";
import Card from "../../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, ActivityIndicator } from "react-native-paper";
import { WithLocalSvg } from "react-native-svg";
import RoundedButton from "../../components/RoundedButton";

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

const LoginScreen = (props: {
  route: any;
  navigation: { navigate: (arg0: string) => void };
}) => {
  const { login } = props.route.params;
  const [isSignUpClicked, setIsSignUpClicked] = useState(true);
  const [isLoginClicked, setIsLoginlicked] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (login != null) {
      if (login) {
        setIsLoginlicked(true);
        setIsSignUpClicked(false);
      }
    }
  }, []);

  /**
   *
   * @returns Login Code
   */
  const Login = () => {
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
              height: 45,
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
            <WithLocalSvg
              width={19}
              height={20}
              asset={require("../../assets/Iconawesome-user.svg")}
            />
            <TextInput
              value={username}
              keyboardType="email-address"
              onChangeText={(name) => setUserName(name)}
              placeholder="UserName / Email"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                color: "#B7B7B7",
                fontSize: normalize(14),
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <View
            style={{
              height: 45,
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
            <WithLocalSvg
              width={16.2}
              height={19}
              asset={require("../../assets/Iconawesome-lock.svg")}
            />
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
                fontSize: normalize(14),
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
                      size={19}
                    ></Icon>
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        marginLeft: 5,
                        fontSize: normalize(17.5),
                        color: "#00B5E0",
                      }}
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
                        fontSize: normalize(17.5),
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
              props.navigation.navigate("ForgotUsername");
            }}
            style={{
              marginLeft: 20,
              textDecorationLine: "underline",
              fontFamily: "Poppins-Regular",
              color: "#00B5E0",
              fontSize: normalize(15.75),
            }}
          >
            Forgot Username?
          </Text>

          <Text
            onPress={() => {
              props.navigation.navigate("ForgotPassword");
            }}
            style={{
              marginRight: 20,
              textDecorationLine: "underline",
              fontFamily: "Poppins-Regular",
              color: "#00B5E0",
              fontSize: normalize(15.75),
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
        />

        {isDone ? <ActivityIndicator style={{ marginTop: 20 }} /> : null}
      </View>
    );
  };

  /**
   *
   * @returns Sign Up Code
   */
  const SignUp = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (
      password,
      score,
      { label, labelColor, activeBarColor }
    ) => {
      console.log(password, score, { label, labelColor, activeBarColor });
    };
    return (
      <View style={{ marginBottom: 30 }}>
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{
              height: 45,
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
            <WithLocalSvg
              width={19}
              height={20}
              asset={require("../../assets/Iconawesome-user.svg")}
            />
            <TextInput
              value={username}
              onChangeText={(name) => setUserName(name)}
              keyboardType="email-address"
              placeholder="Full Name"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                fontFamily: "Poppins-Regular",
                color: "#B7B7B7",
                fontSize: normalize(14),
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
              paddingHorizontal: 10,
              marginTop: 10,
              overflow: "hidden",
            }}
          >
            <WithLocalSvg
              width={21}
              height={14}
              asset={require("../../assets/Iconzocial-email.svg")}
            />
            <TextInput
              keyboardType="default"
              value={email}
              onChangeText={(name) => setEmail(name)}
              placeholder="Email Address"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                fontFamily: "Poppins-Regular",
                color: "#B7B7B7",
                fontSize: normalize(14),
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
              paddingHorizontal: 20,
              marginTop: 10,
              marginBottom: 20,
              overflow: "hidden",
            }}
          >
            <WithLocalSvg
              width={16.2}
              height={19}
              asset={require("../../assets/Iconawesome-lock.svg")}
            />
            <TextInput
              keyboardType="email-address"
              value={password}
              secureTextEntry
              onChangeText={(name) => setPassword(name)}
              placeholder="Password"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                fontFamily: "Poppins-Regular",
                color: "#B7B7B7",
                fontSize: normalize(14),
              }}
            />
            <WithLocalSvg
              width={21}
              height={21}
              asset={require("../../assets/Iconionic-ios-information-circle.svg")}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "#838383",
              fontSize: normalize(17.5),
              alignContent: "center",
              fontFamily: "Poppins-Regular",
            }}
          >
            By clicking “sign up” you agree to our
          </Text>
          <Text
            onPress={() => {
              Alert.alert("INFS Privacy Policy URL Opened Here!!");
            }}
            style={{
              color: "#00B5E0",
              fontSize: normalize(15.75),
              marginVertical: 10,
              alignContent: "center",
              textDecorationLine: "underline",
              fontFamily: "Poppins-Regular",
            }}
          >
            Terms & condition / Privacy Policy
          </Text>
        </View>
        <RoundedButton
          onPress={() => {
            setIsDone(true);
            setTimeout(() => {
              Alert.alert(
                "Account has been created, Please check your email to verify your account!"
              );
              props.navigation.navigate("Login");
              setIsLoginlicked(true);
              setIsSignUpClicked(false);
              setIsDone(false);
            }, 2000);
          }}
          title="Sign Up"
          textVisible={true}
          visible={true}
        />
        {isDone ? <ActivityIndicator style={{ marginTop: 20 }} /> : null}
      </View>
    );
  };

  /**
   * Main Screen Component Render.
   */
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View style={{ height: "80%" }}>
        <View
          style={{
            backgroundColor: Colors.primaryColor,
            marginBottom: 20,
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
              width={width + 100}
              height={height * 0.5}
              style={{ posision: "absolute", top: -200 }}
              preserveAspectRatio="xMinYMin slice"
              asset={require("../../assets/Texture(1).svg")}
            />
          </View>
          <View>
            {!isSignUpClicked ? (
              <Text
                style={{
                  fontSize: normalize(31.5),
                  marginTop: "30%",
                  color: "#FFFFFF",
                  marginHorizontal: 20,
                  fontFamily: "Poppins-Bold",
                }}
              >
                Welcome!
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: normalize(31.5),
                  marginTop: "30%",
                  color: "#FFFFFF",
                  marginHorizontal: 20,
                  fontFamily: "Poppins-Bold",
                }}
              >
                Hello!
              </Text>
            )}
            {!isSignUpClicked ? (
              <Text
                style={{
                  marginHorizontal: 20,
                  color: "#FFFFFF",
                  fontSize: normalize(17.5),
                  marginVertical: 10,
                  marginBottom: 90,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Please log in to access the key to nutrition and fitness
                education
              </Text>
            ) : (
              <Text
                style={{
                  marginHorizontal: 20,
                  color: "#FFFFFF",
                  fontSize: normalize(17.5),
                  marginVertical: 10,
                  marginBottom: 90,
                  fontFamily: "Poppins-Regular",
                }}
              >
                You are a few steps away from a treasure of knowledge on fitness
                and nutrition
              </Text>
            )}
          </View>
        </View>

        <View>
          <Card style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: normalize(21),
                    color: Colors.textColor,
                    fontFamily: "Poppins-Regular",
                  }}
                  onPress={() => {
                    setIsLoginlicked(true);
                    setIsSignUpClicked(false);
                  }}
                >
                  Login
                </Text>
                {isLoginClicked ? (
                  <View
                    style={{
                      width: 50,
                      height: 3,
                      marginTop: 5,
                      backgroundColor: Colors.textColor,
                    }}
                  ></View>
                ) : null}
              </View>

              <View style={{ marginHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: normalize(21),
                    color: Colors.textColor,
                    fontFamily: "Poppins-Regular",
                  }}
                  onPress={() => {
                    setIsLoginlicked(false);
                    setIsSignUpClicked(true);
                  }}
                >
                  SignUp
                </Text>
                {isSignUpClicked ? (
                  <View
                    style={{
                      width: 70,
                      height: 3,
                      marginTop: 5,
                      backgroundColor: Colors.textColor,
                    }}
                  ></View>
                ) : null}
              </View>
            </View>
            <View style={{ alignSelf: "baseline", width: "100%" }}>
              {isLoginClicked ? <Login /> : <SignUp />}
            </View>
          </Card>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: -40,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "#838383",
            fontSize: normalize(21),
            marginBottom: 10,
          }}
        >
          Or
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: -20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#e0e0e0",
            borderRadius: 25,
            borderWidth: 1,
            backgroundColor: "#3b5988",
            marginTop: 10,
            padding: 10,
            width: 250,
            height: 40,
          }}
        >
          <WithLocalSvg
            width={250}
            height={40}
            asset={require("../../assets/facebook.svg")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#e0e0e0",
            borderRadius: 25,
            marginTop: 20,
            marginBottom: 30,
            borderWidth: 1,
            backgroundColor: "#db4437",
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 20,
            width: 250,
            height: 40,
          }}
        >
          <WithLocalSvg
            width={250}
            height={40}
            asset={require("../../assets/Googleplus.svg")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: -100,
    marginBottom: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    color: "#838383",
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
  container: {
    paddingTop: 100,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: "black",
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
  },
});

export default LoginScreen;
