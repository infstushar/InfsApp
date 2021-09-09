import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseContent from "../../components/CourseContentScreen";

const DATA = [
  {
    id: "0",
    module: "N 101",
    title: "Introduction to Exercise Science",
    level: "beginner",
    update: "Nov 2020",
    lang: "English",
    instructor: "Dr.Akshay Alwani",
    stud: "1000",
    hrs: "1500",
    star: "5.0",
  },
  {
    id: "1",
    module: "N 102",
    title: "Introduction to Exercise Science",
    level: "beginner",
    update: "Nov 2020",
    lang: "English",
    instructor: "Dr.Akshay Alwani",
    stud: "1000",
    hrs: "1500",
    star: "5.0",
  },
  {
    id: "2",
    module: "N 103",
    title: "Introduction to Exercise Science",
    level: "beginner",
    update: "Nov 2020",
    lang: "English",
    instructor: "Dr.Akshay Alwani",
    stud: "1000",
    hrs: "1500",
    star: "5.0",
  },
  {
    id: "3",
    module: "N 104",
    title: "Introduction to Exercise Science",
    level: "beginner",
    update: "Nov 2020",
    lang: "English",
    instructor: "Dr.Akshay Alwani",
    stud: "1000",
    hrs: "1500",
    star: "5.0",
  },
];

const ModuleScreen = (props) => {
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
        >
          <CourseContent
            onPress={() => {
              props.navigation.navigate("ModuleDetails");
            }}
          />

          <CourseContent
            onPress={() => {
              props.navigation.navigate("ModuleDetails");
            }}
          />
          <CourseContent
            onPress={() => {
              props.navigation.navigate("ModuleDetails");
            }}
          />

          <CourseContent
            onPress={() => {
              props.navigation.navigate("ModuleDetails");
            }}
          />
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

export default ModuleScreen;
