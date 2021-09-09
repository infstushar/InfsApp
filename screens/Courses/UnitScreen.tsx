import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  PixelRatio,
  TouchableHighlight,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../components/HeaderwithBack";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scale = width / 415;
const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS == "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const UnitScreen = (props) => {
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <Header
        title="Basics of Food and Nutrition"
        onPress={() => {
          props.navigation.goBack(null);
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Icon
          name="ios-chatbox-ellipses"
          color="#00B5E0"
          size={22}
          style={{ marginLeft: 15 }}
        />
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: normalize(14),
            color: "#00B5E0",
            paddingBottom: 10,
            marginLeft: 10,
            textDecorationLine: "underline",
          }}
        >
          Discussion Forum
        </Text>
      </View>
      <ScrollView>
        <View style={{ height }}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate("UnitTextScreen");
            }}
            style={{ width: width, height: 75 }}
          >
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(17.5),
                  color: "#3E3E3E",
                  marginTop: 5,
                }}
              >
                What is Health?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="bookmarks"
                  color="#838383"
                  size={13}
                  style={{ marginLeft: 15 }}
                />
                <Text style={{ marginLeft: 5 }}>Lesson</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate("UnitVideoTextScreen");
            }}
            style={{ width: width, height: 75 }}
          >
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(17.5),
                  color: "#3E3E3E",
                  marginTop: 5,
                }}
              >
                What is Fitness?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="bookmarks"
                  color="#838383"
                  size={13}
                  style={{ marginLeft: 15 }}
                />
                <Text style={{ marginLeft: 5 }}>Lesson & Video</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate("UnitTextScreenFirst");
            }}
            style={{ width: width, height: 75 }}
          >
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(17.5),
                  color: "#3E3E3E",
                  marginTop: 5,
                }}
              >
                What is Nutrition?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="bookmarks"
                  color="#838383"
                  size={13}
                  style={{ marginLeft: 15 }}
                />
                <Text style={{ marginLeft: 5 }}>Lesson</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={{ width: width, height: 75 }}
          >
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(17.5),
                  color: "#3E3E3E",
                  marginTop: 5,
                }}
              >
                Dietetics
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="bookmarks"
                  color="#838383"
                  size={13}
                  style={{ marginLeft: 15 }}
                />
                <Text style={{ marginLeft: 5 }}>Lesson</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={{ width: width, height: 75 }}
          >
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(17.5),
                  color: "#3E3E3E",
                  marginTop: 5,
                }}
              >
                Therapeutic Nutrition
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="bookmarks"
                  color="#838383"
                  size={13}
                  style={{ marginLeft: 15 }}
                />
                <Text style={{ marginLeft: 5 }}>Lesson</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UnitScreen;
