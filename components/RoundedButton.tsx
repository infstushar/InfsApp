import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/colors";
import { WithLocalSvg } from "react-native-svg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Font from "../constants/Font";

const { width, height } = Dimensions.get("window");

const RoundedButton = (props) => {
  return (
    <View>
      {props.visible && props.textVisible ? (
        <TouchableOpacity
          style={{ ...styles.button, ...props.style }}
          onPress={() => {
            props.onPress();
          }}
        >
          <Text style={styles.text}>{props.title}</Text>
          <View style={styles.iconContainer}>
            <Icon name={props.name} color="white" size={29}></Icon>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            props.onPress();
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {props.textVisible ? (
              <Text style={styles.text1}>{props.title}</Text>
            ) : (
              <WithLocalSvg asset={require("../assets/Iconforward.svg")} />
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    height: hp("5%"),
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 29,
    backgroundColor: Colors.textColor,
    shadowColor: "#00000029",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  button1: {
    flexDirection: "row",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 29,
    backgroundColor: Colors.textColor,
    shadowColor: "#00000029",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  text: {
    flex: 1,
    textAlign: "center",

    color: "white",
    fontSize: Font.h4,
    fontFamily: "Poppins-Medium",
  },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: Font.h4,
    fontFamily: "Poppins-Medium",
  },
  iconContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});

export default RoundedButton;
