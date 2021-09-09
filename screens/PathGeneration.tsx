import React, { Component, useRef } from "react";
import {
  Text,
  Dimensions,
  ScrollView,
  Animated,
  View,
  StyleSheet,
} from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Ellipse, Circle } from "react-native-svg";
import * as PathHelper from "./PathHelper";

const { width } = Dimensions.get("screen");
export default class PathGeneration extends Component {
  // size = 0;
  constructor(props) {
    super(props);

    this.month = 10;
    this.totalDays = this.month * 30;

    this.leaderLineProperty = {
      lineWidth: width - 180,
      radius: 50,
    };
  }

  startProcessing = () => {
    this.path = PathHelper.getPath(this.month, PathHelper.LeaderPathProperty);
    this.pathSegmentArray = PathHelper.getPathProperty(
      this.path,
      this.totalDays,
      //this.incrementPathSize()
      20
    );

    this.area = PathHelper.calculateProgressArea(
      this.totalDays,
      this.pathSegmentArray
    );
  };

  /* incrementPathSize = () => {
    size = +30;
    return size;
  };*/

  /*addAnimationListener = () => {
    this.state.animation.addListener(({ value }) => {
      const progress = value * this.totalDays;
      const path = PathHelper.calculateProgressArea(
        progress,
        this.pathSegmentArray
      );

      if (this.progressPath) {
        this.progressPath.setNativeProps({
          d: path,
        });
      }
    });
  };*/

  render() {
    this.startProcessing();
    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "white",
          flexGrow: 1,
          marginBottom: 50,
        }}
      >
        <Animated.View>
          <Svg
            style={{
              width: "100%",
              height: this.month * 100 + 120,
            }}
          >
            <Path
              d={this.area}
              stroke="black"
              strokeWidth={0.5}
              fill="gray"
              fillRule="evenodd"
            />
          </Svg>
        </Animated.View>
      </ScrollView>
    );
  }
}
