import React from "react";
import { Dimensions, Platform, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const scale = width / 375;

const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS == "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default {
  h1: normalize(42),
  h2: normalize(31.5),
  h3: normalize(26.25),
  h4: normalize(21),
  h5: normalize(17.5),
  h6: normalize(15.75),
  p1: normalize(14),
  p2: normalize(12.25),
};
