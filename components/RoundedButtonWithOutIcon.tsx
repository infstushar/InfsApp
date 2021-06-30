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
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 40,
    backgroundColor: Colors.textColor,
  },
  button2: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 40,
    backgroundColor: "#838383",
  },
  text: {
    flex: 1,
    textAlign: "center",
    paddingLeft: 40,
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  iconContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});

export default RoundedButtonWithOutIcon;
