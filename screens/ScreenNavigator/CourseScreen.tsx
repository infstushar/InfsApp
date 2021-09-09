import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import CardComponentScreent from "../../components/CardCoponentScreent";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header";
import { withDecay } from "react-native-reanimated";

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

const Data = [
  {
    Img: require("../../assets/banner5.jpeg"),
    title: "Diploma in Nutrition and Fitness",
    description:
      "A one-of-a-kind diploma course, it is a culmination of research and evidence based curriculum",
    author: "Dr Akshay Alwani",
    price: "25000",
    studentEnroll: "1000",
    hrs: "1200",
    tag: ["Nutrition", "health", "Fitness"],
  },
  {
    Img: require("../../assets/banner3.jpeg"),
    title: "Diploma in Nutrition and Fitness",
    description:
      "A comprehensive course which is designed keeping in mind the special demands of different sports,",
    author: "Dr Akshay Alwani",
    price: "25000",
    studentEnroll: "1000",
    hrs: "1200",
    tag: [{ tag1: "Nutrition" }, { tag2: "health" }, { tag3: "Fitness" }],
  },
  {
    Img: require("../../assets/banner5.jpeg"),
    title: "Diploma in Nutrition and Fitness",
    description:
      "A comprehensive course which is designed keeping in mind the special demands of different sports,",
    author: "Dr Akshay Alwani",
    price: "25000",
    studentEnroll: "1000",
    hrs: "1200",
    tag: [{ tag1: "Nutrition" }, { tag2: "health" }, { tag3: "Fitness" }],
  },
];

const CourseScreen = (props: {
  route: any;
  navigation: { navigate: (arg0: string) => void };
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Courses" />
      <View>
        {/*<View
          style={{
            backgroundColor: "#E6E7E9",
            width: width * 0.7,
            height: 50,
            borderRadius: 25,
            marginLeft: 30,
            marginTop: 10,
          }}
        ></View>*/}
        <ScrollView style={{ flexGrow: 1, marginTop: 1 }}>
          <View style={styles.screen}>
            <CardComponentScreent
              Img={Data[0].Img}
              title={Data[0].title}
              description={Data[0].description}
              author={Data[0].author}
              price={Data[0].price}
              studentEnroll={Data[0].studentEnroll}
              hrs={Data[0].hrs}
              tag={Data[0].tag[0]}
              onPress={() => {
                props.navigation.navigate("CourseDetails");
              }}
            />
          </View>
          <View style={styles.screen}>
            <CardComponentScreent
              Img={Data[1].Img}
              title={Data[1].title}
              description={Data[1].description}
              author={Data[1].author}
              price={Data[1].price}
              studentEnroll={Data[1].studentEnroll}
              hrs={Data[1].hrs}
              tag={Data[0].tag[0]}
              onPress={() => {
                props.navigation.navigate("CourseDetails");
              }}
            />
          </View>
          <View style={styles.screen}>
            <CardComponentScreent
              Img={Data[2].Img}
              title={Data[2].title}
              description={Data[2].description}
              author={Data[2].author}
              price={Data[2].price}
              studentEnroll={Data[2].studentEnroll}
              hrs={Data[2].hrs}
              tag={Data[0].tag[0]}
              onPress={() => {
                props.navigation.navigate("CourseDetails");
              }}
            />
          </View>
          <View style={{ height: 110 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 1,
    marginRight: -8,
  },
});

export default CourseScreen;
