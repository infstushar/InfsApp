import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
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

const OnboardingScreen1 = () => {
  return (
    <View style={styles.fullPageView}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.textureImage}>
          <WithLocalSvg
            width={width + 30}
            height={height * 0.4}
            asset={require("../../assets/texturenew.svg")}
          />
        </View>
        <View style={{ marginTop: height * 0.2 }}>
          <WithLocalSvg
            width={width}
            height={height * 0.3}
            asset={require("../../assets/vector1.svg")}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        <Text style={styles.titleText}>The Knowledge you need</Text>
        <View style={{ width: "100%" }}>
          <Text style={styles.infoText}>
            Looking for authentic evidence backed {"\n"}health and nutrition
            knowledge?{"\n"} You’re at the right place!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skipContainer: {
    alignItems: "flex-end",
  },
  paginationDots: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 10 / 2,
    backgroundColor: "#00B5E0",
  },
  roundedButton: {
    borderRadius: 29,
    overflow: "hidden",
    marginVertical: 20,
    justifyContent: "center",
    borderColor: "#00B5E0",
  },
  titleText: {
    fontSize: normalize(26.25),
    color: "#555555",
    fontFamily: "Poppins-Medium",
  },
  infoText: {
    color: "#838383",
    fontSize: normalize(17.5),
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    fontFamily: "Poppins-Regular",
    marginTop: 10,
    marginBottom: 30,
    marginStart: 20,
    marginEnd: 20,
    letterSpacing: 0,
  },
  skipButtonText: {
    color: "#838383",
    fontSize: normalize(17.5),
    textDecorationLine: "underline",
    marginRight: 10,
    fontFamily: "Poppins-Regular",
  },
  textureImage: {
    position: "absolute",
    top: -(height / 7),
    marginLeft: 10,
  },
  fullPageView: {
    flex: 1,
    alignItems: "center",
    width: width,
  },
  pageDotView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  skipNextContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  bottomContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    flexDirection: "row",
    marginBottom: 30,
  },
  accountText: {
    color: "#6F7070",
    fontSize: normalize(21),
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    marginTop: 25,
  },
  logInText: {
    textDecorationLine: "underline",
    fontFamily: "Poppins-Regular",
    color: "#00b5e0",
    fontSize: normalize(15.75),
  },
});

export default OnboardingScreen1;
