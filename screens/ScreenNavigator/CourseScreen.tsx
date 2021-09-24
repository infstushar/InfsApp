import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import CardComponentScreent from "../../components/CardCoponentScreent";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header";

import Font from "../../constants/Font";
import FilterScreen from "../Courses/FilterScreen";

import { WithLocalSvg } from "react-native-svg";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [isAllCoursesClicked, setIsAllCoursesClicked] = useState(true);
  const [isEnrolledClicked, setIsEnrolledClicked] = useState(false);
  useEffect(() => {
    setIsAllCoursesClicked(true);
    setIsEnrolledClicked(false);
  }, []);
  const AllCourses = () => {
    return (
      <View style={{ flex: 1 }}>
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
    );
  };

  const EnrolledCourses = () => {
    return (
      <View style={{ flex: 1 }}>
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

          <View style={{ height: 110 }}></View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Courses" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <FilterScreen onPress={() => setModalVisible(!modalVisible)} />
      </Modal>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View
          style={{
            borderRadius: 25,
            backgroundColor: "#E6E7E9",
            width: 300,
            height: 50,
            marginLeft: 20,
            flexDirection: "row",
          }}
        >
          {isAllCoursesClicked ? (
            <TouchableOpacity
              style={{
                backgroundColor: "#00B5E0",
                width: 140,
                height: 40,
                margin: 5,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setIsAllCoursesClicked(true);
                setIsEnrolledClicked(false);
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#FFFFFF",
                  fontSize: Font.p1,
                }}
              >
                All Courses
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "#E6E7E9",
                width: 140,
                height: 40,
                margin: 5,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setIsAllCoursesClicked(true);
                setIsEnrolledClicked(false);
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#838383",
                  fontSize: Font.p1,
                }}
              >
                All Courses
              </Text>
            </TouchableOpacity>
          )}

          {isEnrolledClicked ? (
            <TouchableOpacity
              style={{
                backgroundColor: "#00B5E0",
                width: 140,
                height: 40,
                margin: 5,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setIsAllCoursesClicked(true);
                setIsEnrolledClicked(false);
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#FFFFFF",
                  fontSize: Font.p1,
                }}
              >
                Enrolled Courses
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "#E6E7E9",
                width: 140,
                height: 40,
                margin: 5,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                setIsAllCoursesClicked(false);
                setIsEnrolledClicked(true);
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#838383",
                  fontSize: Font.p1,
                }}
              >
                Enrolled Courses
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={{
            width: 40,
            backgroundColor: "#00B5E0",
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 15,
            marginTop: 5,
          }}
          onPress={() => setModalVisible(true)}
        >
          <WithLocalSvg
            width={21}
            height={20}
            asset={require("../../assets/filter.svg")}
          />
        </TouchableOpacity>
      </View>

      {isAllCoursesClicked ? <AllCourses /> : <EnrolledCourses />}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    marginLeft: 1,
    marginRight: -8,
    flexGrow: 1,
  },
});

export default CourseScreen;
