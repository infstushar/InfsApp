import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { ReactRenderer } from "@atlaskit/renderer";
import { doc, p, text, strong } from "@atlaskit/adf-utils/builders";

const document = doc(p(text("Some"), strong(text("Total"))));

export default class Atkit extends Component {
  render() {
    return <ReactRenderer document={document} />;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
