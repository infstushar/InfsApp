import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableHighlight,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import { Card, Paragraph, Chip } from "react-native-paper";

import Icon from "react-native-vector-icons/Ionicons";
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

const CourseContentScreen = (props) => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.onPress();
      }}
    >
      <View
        style={{
          width: width,
          backgroundColor: props.bgColor,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: normalize(17.5),
            color: "#3E3E3E",
          }}
        >
          Basics of Food and Nutrition
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: normalize(14),
            color: "#838383",
          }}
        >
          INFS Basic Nutrition and Fitness Course is designed specifically
        </Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  horizontalline: {
    backgroundColor: "#00000029",
    height: 1,
    width: "95%",
    marginTop: 5,
    marginLeft: 15,
  },
});

export default CourseContentScreen;
