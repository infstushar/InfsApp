import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  FlatList,
  StatusBar,
  Platform,
  PixelRatio,
  LogBox,
} from "react-native";
import CourseContentScreen from "../../components/CourseContentScreen";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import { Chip, Paragraph, List, Card } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";
import { Node } from "react-native-reanimated";
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

const DATA = [
  {
    id: "0",
    module: "N 101",
    title: "Basic Nutrition and Fitness Course",
    level: "Beginner",
    update: "Nov 2020",
    lang: "English",
    instructor: "Dr.Akshay Alwani",
    stud: "1000",
    hrs: "1500",
    star: "5.0",
    price: "5000",
    tag: [
      { id: "0", tag: "Nutrition" },
      { id: "1", tag: "Fitness" },
      { id: "2", tag: "Health" },
    ],
    coursecontent: [
      {
        id: "0",
        tag: "To learn how to design a workout plan and the primary components of it.",
      },
      {
        id: "1",
        tag: "To understand according to one’s goals and how to design the optimum training plan according to them.",
      },
      {
        id: "2",
        tag: "To learn about muscle fatigue and the reasons that cause it.",
      },
      {
        id: "3",
        tag: "To discuss the frequency of workouts depending on goals.",
      },
    ],
    unitcontent: [
      {
        id: "0",
        tag: "To learn about Nutrition and its components ",
      },
      {
        id: "1",
        tag: "To discover what optimum nutrition means ",
      },
      {
        id: "2",
        tag: "To understand why everyone needs knowledge about nutrition",
      },
    ],
    unitcontent1: [
      {
        id: "0",
        tag: "To discuss obesity condition",
      },
      {
        id: "1",
        tag: "To understand the lifestyle disorders related to obesity ",
      },
      {
        id: "2",
        tag: "To discuss precautions to be taken to avoid the lifestyle disorders",
      },
    ],
    unitcontent2: [
      {
        id: "0",
        tag: "To understand the history of the Nutrition Pyramid ",
      },
      {
        id: "1",
        tag: "To understand the impact of deficiency of protein in Indian diets and the need for protein",
      },
      {
        id: "2",
        tag: "To discuss the nutrition guidelines to be followed for better health and fitness",
      },
    ],

    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    eligiblity: "Applicant should be above 18 years of Age",
  },
];

const ModuleDetails = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const renderItem = ({ item }) => (
    <Chip
      onPress={() => console.log("Pressed")}
      style={{
        marginRight: 5,
        height: 25,
        alignItems: "center",
        marginTop: 10,
        marginLeft: 10,
      }}
      textStyle={{
        fontSize: normalize(12),
        fontFamily: "Poppins-Regular",
        color: "#3E3E3E",
      }}
    >
      {item.tag}
    </Chip>
  );

  const renderItemforUnit = ({ item }) => (
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Icon name="ellipse" size={8} color="#3E3E3E" />
        </View>
        <View style={styles.bulletText}>
          <Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: normalize(12),
                color: "#3E3E3E",
              }}
            >
              {item.tag}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
  const renderItemforlearn = ({ item }) => (
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Icon name="ios-checkmark-sharp" size={14} color="#34B94C" />
        </View>
        <View style={styles.bulletText}>
          <Text>
            <Text style={styles.boldText}>{item.tag}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        title="Diploma in Nutrition and Fitness"
        onPress={() => {
          props.navigation.goBack(null);
        }}
      />
      <View
        style={{
          width: width,
          height: 200,
        }}
      >
        <Image
          source={require("../../assets/banner5.jpeg")}
          style={{ width: width, height: "100%" }}
        />
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon
            name="star"
            color="#34B94C"
            size={15}
            style={{ marginLeft: 15 }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              marginLeft: 10,
            }}
          >
            {DATA[0].star}.
          </Text>
          <Text
            style={{
              textDecorationLine: "underline",
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              marginLeft: 10,
            }}
          >
            100 reviews
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: normalize(21),
            color: "#3E3E3E",
            paddingBottom: 10,
            marginLeft: 10,
          }}
        >
          {DATA[0].title}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              marginLeft: 10,
            }}
          >
            {DATA[0].level}
          </Text>
          <View style={styles.hairline} />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#838383",
              paddingLeft: 5,
            }}
          >
            Last updated on
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              paddingLeft: 5,
            }}
          >
            {DATA[0].update}
          </Text>
          <View style={styles.hairline} />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              paddingLeft: 5,
            }}
          >
            {DATA[0].lang}
          </Text>
        </View>

        <View style={{ flexDirection: "row", paddingTop: 5, marginLeft: 10 }}>
          <Image
            source={require("../../assets/abc.jpeg")}
            style={{
              borderRadius: 30,
              width: 25,
              height: 25,
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
              borderWidth: 1,
              borderColor: "#FFFFFF",
            }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: normalize(14),
              color: "#838383",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            Instructor:
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              paddingLeft: 5,
              marginLeft: 5,
              marginTop: 5,
            }}
          >
            {DATA[0].instructor}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon
            name="ios-people-sharp"
            color="#3E3E3E"
            size={22}
            style={{
              marginLeft: 15,
            }}
          ></Icon>
          <Text
            style={{
              paddingLeft: 5,
              fontFamily: "Poppins-Medium",
              fontSize: normalize(14),
              color: "#3E3E3E",
              marginTop: 5,
            }}
          >
            {DATA[0].stud} Students Enrolled
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="md-alarm-sharp"
              color="#3E3E3E"
              size={22}
              style={{ marginLeft: 15 }}
            ></Icon>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 12,
                color: "#3E3E3E",
                paddingLeft: 5,
                paddingTop: 5,
              }}
            >
              {DATA[0].hrs} hours
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <FlatList
            data={DATA[0].tag}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <Text
          style={{
            fontSize: normalize(17.5),
            fontFamily: "Poppins-Medium",
            color: "#3E3E3E",
            marginLeft: 15,
          }}
        >
          What you ‘ll learn
        </Text>
        <View
          style={{
            paddingVertical: 15,
            backgroundColor: "#F8F8F8",
          }}
        >
          <FlatList
            data={DATA[0].coursecontent}
            renderItem={renderItemforlearn}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "#3E3E3E",
              marginLeft: 15,
              fontFamily: "Poppins-Medium",
              fontSize: normalize(17.5),
            }}
          >
            Module Content :
          </Text>
          <Text
            style={{
              color: "#838383",
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
              fontSize: normalize(14),
            }}
          >
            12 Units | 30 hrs of videos / Slides
          </Text>
          <View style={styles.horizontalline} />
        </View>
        <View style={{ width: width, height: "20%" }}>
          <ScrollView>
            <List.Section>
              <List.Accordion
                title={<Text>To define Health and Fitness</Text>}
                titleStyle={{
                  fontSize: normalize(15.75),
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
              >
                <FlatList
                  data={DATA[0].unitcontent}
                  renderItem={renderItemforUnit}
                  keyExtractor={(item) => item.id}
                />
              </List.Accordion>

              <List.Accordion
                title={<Text>To understand BMI and its drawbacks</Text>}
                titleStyle={{
                  fontSize: normalize(15.75),
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
              >
                <FlatList
                  data={DATA[0].unitcontent1}
                  renderItem={renderItemforUnit}
                  keyExtractor={(item) => item.id}
                />
              </List.Accordion>
              <List.Accordion
                title={<Text>To understand Nutrition Pyramid</Text>}
                titleStyle={{
                  fontSize: normalize(15.75),
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
              >
                <FlatList
                  data={DATA[0].unitcontent2}
                  renderItem={renderItemforUnit}
                  keyExtractor={(item) => item.id}
                />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              color: "#3E3E3E",
              marginLeft: 15,
              fontSize: normalize(17.5),
              fontFamily: "Poppins-SemiBold",
              marginTop: 5,
            }}
          >
            Module Description
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              paddingVertical: 10,
              marginHorizontal: 10,
              color: "#838383",
            }}
          >
            {DATA[0].description}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#3E3E3E",
              marginLeft: 15,
              marginTop: 5,
              fontSize: normalize(17.5),
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Module Eligibility
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              paddingVertical: 10,
              marginHorizontal: 10,
              color: "#838383",
            }}
          >
            {DATA[0].eligiblity}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "#3E3E3E",
              marginLeft: 15,
              fontSize: normalize(17.5),
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Testimonials
          </Text>
          <Card
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 10,
              height: height * 0.25,
            }}
          >
            <Swiper
              dot={
                <View
                  style={{
                    height: 10,
                    width: 10,
                    marginHorizontal: 5,
                    borderRadius: 10 / 2,
                    backgroundColor: "#00B5E0",
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    height: 10,
                    width: 20,
                    marginHorizontal: 5,
                    borderRadius: 10 / 2,
                    backgroundColor: "#00B5E0",
                  }}
                />
              }
            >
              <View>
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../../assets/abc.jpeg")}
                      style={{
                        borderRadius: 30,
                        width: 70,
                        height: 70,
                        backgroundColor: "#FFFFFF",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 5,
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        marginTop: 10,
                      }}
                    />
                    <View style={{ marginTop: 15 }}>
                      <Text
                        style={{
                          color: "#3E3E3E",
                          marginLeft: 15,
                          fontSize: normalize(17.5),
                          fontFamily: "Poppins-Medium",
                        }}
                      >
                        Virendra Tilekar
                      </Text>
                      <Text
                        style={{
                          color: "#3E3E3E",
                          marginLeft: 15,
                          fontSize: normalize(14),
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        Foundation Course,
                      </Text>
                    </View>
                    <Chip
                      disabled
                      style={{
                        marginRight: 5,
                        height: 20,
                        alignItems: "center",
                        backgroundColor: "#37B84C",
                        marginLeft: 50,
                        marginTop: 20,
                      }}
                      textStyle={{
                        fontSize: normalize(14),
                        fontFamily: "Poppins-Regular",
                        color: "#FFFFFF",
                      }}
                    >
                      {DATA[0].star}
                      <Icon
                        name="star"
                        color="#FFFFFF"
                        size={12}
                        style={{ marginLeft: 5 }}
                      ></Icon>
                    </Chip>
                  </View>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: "Poppins-Regular",
                      color: "#838383",
                    }}
                  >
                    There are many variations of passages of Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don’t look even
                    slightly believable.
                  </Text>
                </Card.Content>
              </View>
              <View>
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../../assets/abc.jpeg")}
                      style={{
                        borderRadius: 30,
                        width: 70,
                        height: 70,
                        backgroundColor: "#FFFFFF",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 5,
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        marginTop: 10,
                      }}
                    />
                    <View style={{ marginTop: 15 }}>
                      <Text
                        style={{
                          color: "#3E3E3E",
                          marginLeft: 15,
                          fontSize: normalize(17.5),
                          fontFamily: "Poppins-Medium",
                        }}
                      >
                        Virendra Tilekar
                      </Text>
                      <Text
                        style={{
                          color: "#3E3E3E",
                          marginLeft: 15,
                          fontSize: normalize(14),
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        Foundation Course,
                      </Text>
                    </View>
                    <Chip
                      disabled
                      style={{
                        marginRight: 5,
                        height: 20,
                        alignItems: "center",
                        backgroundColor: "#37B84C",
                        marginLeft: 50,
                        marginTop: 20,
                      }}
                      textStyle={{
                        fontSize: normalize(14),
                        fontFamily: "Poppins-Regular",
                        color: "#FFFFFF",
                      }}
                    >
                      {DATA[0].star}
                      <Icon
                        name="star"
                        color="#FFFFFF"
                        size={12}
                        style={{ marginLeft: 5 }}
                      ></Icon>
                    </Chip>
                  </View>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: "Poppins-Regular",
                      color: "#838383",
                    }}
                  >
                    There are many variations of passages of Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don’t look even
                    slightly believable.
                  </Text>
                </Card.Content>
              </View>
            </Swiper>
          </Card>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            width: "45%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            borderRadius: 29,
            backgroundColor: "#00B5E0",
            shadowColor: "#00000029",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
            marginLeft: width * 0.28,
          }}
          onPress={() => {
            props.navigation.navigate("UnitScreen");
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: normalize(15.75),
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Start My Learng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 10,
  },
  hairline: {
    backgroundColor: "#838383",
    height: 13,
    width: 2,
    marginTop: 5,
    marginLeft: 5,
  },
  column: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 1,
    marginTop: 5,
  },
  bullet: {
    width: 20,
    marginTop: 5,
    marginLeft: 15,
  },
  bulletText: {
    flex: 1,
    paddingRight: 10,
  },
  boldText: {
    fontFamily: "Poppins-Regular",
    fontSize: normalize(15.75),
    color: "#3E3E3E",
  },
  horizontalline: {
    backgroundColor: "#00000029",
    height: 1,
    width: "92%",
    marginTop: 5,
    marginLeft: 15,
  },
});

export default ModuleDetails;
