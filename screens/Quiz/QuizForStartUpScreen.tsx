import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import { Button, ProgressBar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { WithLocalSvg } from "react-native-svg";
import RoundedButton from "../../components/RoundedButton";
import QuizThemeScreenForFour from "./QuizThemeScreenForFour";

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

const DATA = [
  {
    id: "1",
    question:
      "What are some of the things you can do to help support your health?",
    anwers: [
      "Regular physical activity",
      "Eating nutritious food",
      "Talking to a friend",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    id: "2",
    question:
      "What are some of the things you can do to help support your health?",
    anwers: [
      "Regular physical activity",
      "Eating nutritious food",
      "Talking to a friend",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    id: "3",
    question:
      "What are some of the things you can do to help support your health?",
    anwers: [
      "Regular physical activity",
      "Eating nutritious food",
      "Talking to a friend",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    id: "4",
    question:
      "What are some of the things you can do to help support your health?",
    anwers: [
      "Regular physical activity",
      "Eating nutritious food",
      "Talking to a friend",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    id: "4",
    question:
      "What are some of the things you can do to help support your health?",
    anwers: [
      "Regular physical activity",
      "Eating nutritious food",
      "Talking to a friend",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
];

const QuizForStartUpScreen = (props: {
  navigation: { navigate: (arg0: string, arg1: Object) => void };
}) => {
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "row" }}>
        <ProgressBar
          progress={0.125}
          color={"#34B94C"}
          style={{
            backgroundColor: "#E6E7E9",
            borderRadius: 8,
            width: 300,
            height: 10,
            marginLeft: 50,
            marginTop: 10,
          }}
        />
        <WithLocalSvg
          width={40}
          height={40}
          asset={require("../../assets/Hint.svg")}
          style={{ marginLeft: 3 }}
        />
      </View>
      <QuizThemeScreenForFour
        question={DATA[0].question}
        answer1={DATA[0].anwers[0]}
        answer2={DATA[0].anwers[1]}
        answer3={DATA[0].anwers[2]}
        answer4={DATA[0].anwers[3]}
      />
      <RoundedButton
        onPress={() => {}}
        title="Submit"
        textVisible={true}
        visible={true}
      />
      <RoundedButton
        onPress={() => {}}
        title="Quit Quiz"
        textVisible={true}
        visible={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});

export default QuizForStartUpScreen;
