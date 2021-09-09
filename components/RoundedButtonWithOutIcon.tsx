import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/colors";
import { WithLocalSvg } from "react-native-svg";

const RoundedButtonWithOutIcon = (props) => {
  return (
    <View>
      {!props.colorChange ? (
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
      ) : (
        <TouchableOpacity
          style={styles.button2}
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
  button1: {
    flexDirection: "row",
    height: 40,
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
  button2: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 29,
    backgroundColor: "#00B5E0",
    shadowColor: "#00000029",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  text: {
    flex: 1,
    textAlign: "center",
    paddingLeft: 40,
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  iconContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});

export default RoundedButtonWithOutIcon;
