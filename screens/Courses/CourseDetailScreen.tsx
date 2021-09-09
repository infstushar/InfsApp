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
  LogBox,
  Platform,
  PixelRatio,
} from "react-native";
import CourseContentScreen from "../../components/CourseContentScreen";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import Header from "../../components/HeaderwithBack";

import {
  Avatar,
  Button,
  Card,
  Chip,
  Title,
  Paragraph,
  List,
} from "react-native-paper";

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
    id: "0",
    title: "Diploma in Nutrition and Fitness",
    level: "Beginner",
    update: "Nov 2020",
    lang: "English",
    instructor: "Dr.Akshay Alwani",
    stud: "1000",
    hrs: "1500",
    star: "5.0",
    price: "25000",
    tag: [
      { id: "0", tag: "Nutrition" },
      { id: "1", tag: "Fitness" },
      { id: "2", tag: "Health" },
    ],
    coursecontent: [
      { id: "0", tag: "30 hours on-demand video" },
      { id: "1", tag: "12 lessons" },
      { id: "2", tag: "3 PDF’s to Download" },
      { id: "3", tag: "Access on Mobile and Desktop" },
      { id: "4", tag: "Discussion Forum" },
      { id: "5", tag: "Full lifetime access" },
    ],
    learningcontent: [
      { id: "0", tag: "Review your current diet and lifestyle." },
      {
        id: "1",
        tag: "Understand the benefits your new healthier lifestyle will bring.",
      },
      { id: "2", tag: "Plan your own customised diet/meal plans." },
      {
        id: "3",
        tag: "Create your own activity plan to achieve fitness goals.",
      },
    ],
    description: `INFS Basic Nutrition and Fitness Course is designed specifically for the people who are at the absolute start of their fitness career. In this course you shall learn the basic why’s and the how’s of nutrition and exercise sciences along with a number of fun tasks that you are sure to have fun doing!`,
    eligiblity: "Applicant should be above 18 years of Age",
    faq: [
      {
        id: "0",
        tag: "To learn how to design a workout plan and the primary components of it.",
      },
    ],
  },
];

const CourseDetailScreen = (props) => {
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
        fontSize: normalize(12.5),
        fontFamily: "Poppins-Regular",
        color: "#3E3E3E",
      }}
    >
      {item.tag}
    </Chip>
  );
  const renderItemforCourseContent = ({ item }) => (
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Icon name="ellipse" size={8} color="#3E3E3E" />
        </View>
        <View style={styles.bulletText}>
          <Text>
            <Text style={styles.boldText}>{item.tag}</Text>
          </Text>
        </View>
      </View>
    </View>
  );

  const renderItemforlearn = ({ item }) => (
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Icon name="ios-checkmark-sharp" size={13} color="#34B94C" />
        </View>
        <View style={styles.bulletText}>
          <Text>
            <Text style={styles.boldText}>{item.tag}</Text>
          </Text>
        </View>
      </View>
    </View>
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
                fontSize: normalize(14),
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
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        title="Basic Nutrition and Fitness Course"
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
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ marginLeft: 15 }}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon name="star" color="#34B94C" size={15} style={{}} />
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
                marginLeft: 5,
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

              marginTop: 10,
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

          <View style={{ flexDirection: "row", paddingTop: 5 }}>
            <Image
              source={require("../../assets/abc.jpeg")}
              style={{
                borderRadius: 30,
                width: 25,
                height: 25,
                backgroundColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",

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
              style={{}}
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
                style={{ marginLeft: 20 }}
              ></Icon>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(14),
                  color: "#3E3E3E",
                  paddingLeft: 5,
                  paddingTop: 5,
                }}
              >
                {DATA[0].hrs} hours
              </Text>
            </View>
          </View>
          <FlatList
            data={DATA[0].tag}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#EAEAEA",

            margin: 15,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: normalize(17.5),
              fontFamily: "Poppins-Medium",
              color: "#3E3E3E",
              marginLeft: 20,
            }}
          >
            This Course Includes:
          </Text>
          <FlatList
            data={DATA[0].coursecontent}
            renderItem={renderItemforCourseContent}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text
          style={{
            fontSize: normalize(17.5),
            fontFamily: "Poppins-Medium",
            color: "#3E3E3E",
            marginLeft: 30,
          }}
        >
          Here’s what you ‘ll learn:
        </Text>
        <View
          style={{
            marginTop: 5,
            paddingVertical: 15,
            backgroundColor: "#F8F8F8",
          }}
        >
          <FlatList
            data={DATA[0].learningcontent}
            renderItem={renderItemforlearn}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "#3E3E3E",
              marginLeft: 15,
              fontFamily: "Poppins-SemiBold",
              fontSize: normalize(17.5),
            }}
          >
            Course Content :
          </Text>
          <View style={{ marginLeft: 15, marginVertical: 10 }}>
            <View style={styles.horizontalline} />
            <CourseContentScreen
              onPress={() => {
                props.navigation.navigate("ModuleDetails");
              }}
              bgColor="#F8F8F8"
            />
            <View style={styles.horizontalline} />
            <CourseContentScreen
              onPress={() => {
                props.navigation.navigate("ModuleDetails");
              }}
              bgColor="#FfFfFf"
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 28,
            width: 28,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: width / 2,
            marginTop: 20,
            borderRadius: 90,
            backgroundColor: "#00B5E0",
            shadowColor: "#00000029",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
          }}
          onPress={() => {}}
        >
          <Icon name="md-chevron-down-sharp" color="#FFFFFF" size={24}></Icon>
        </TouchableOpacity>

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
            Course Description
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: normalize(14),
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
              fontSize: normalize(17.5),
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Course Eligibility
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: normalize(14),
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
            Accreditation
          </Text>
          <View style={{ marginLeft: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/dipp.jpeg")}
                style={{
                  height: 60,
                  width: 110,
                  resizeMode: "stretch",
                }}
              />
              <Image
                source={require("../../assets/iso.jpeg")}
                style={{
                  height: 60,
                  width: 60,
                  resizeMode: "stretch",
                  marginLeft: 20,
                }}
              />
            </View>
            <Image
              source={require("../../assets/cpd-doc-infs.png")}
              style={{
                height: 60,
                width: 205,
                resizeMode: "stretch",
                marginTop: 10,
              }}
            />
          </View>
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

        <Text
          style={{
            color: "#3E3E3E",
            marginLeft: 15,
            fontSize: normalize(17.5),
            fontFamily: "Poppins-SemiBold",
            marginTop: 10,
          }}
        >
          FAQ's
        </Text>
        <View style={{ width: width, height: "30%" }}>
          <ScrollView>
            <List.Section>
              <List.Accordion
                title="Diploma in Nutrition and Fitness?"
                titleStyle={{
                  fontSize: 12,
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
              >
                <FlatList
                  data={DATA[0].faq}
                  renderItem={renderItemforUnit}
                  keyExtractor={(item) => item.id}
                />
              </List.Accordion>

              <List.Accordion
                title="Content Prep course?"
                titleStyle={{
                  fontSize: 12,
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
              >
                <FlatList
                  data={DATA[0].faq}
                  renderItem={renderItemforUnit}
                  keyExtractor={(item) => item.id}
                />
              </List.Accordion>
              <List.Accordion
                title="Calisthenics Trainer Certification?"
                titleStyle={{
                  fontSize: 12,
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
              >
                <FlatList
                  data={DATA[0].faq}
                  renderItem={renderItemforUnit}
                  keyExtractor={(item) => item.id}
                />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: normalize(17.5),
              color: "#3E3E3E",
            }}
          >
            Course Cost
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: normalize(17.5),
              color: "#3E3E3E",
              marginTop: 2,
            }}
          >
            Rs: {DATA[0].price}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            width: "35%",
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
            Enroll Now
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
    paddingRight: 10,
  },
  bulletText: {
    flex: 1,
    paddingRight: 10,
  },
  boldText: {
    fontFamily: "Poppins-Regular",
    fontSize: normalize(14),
    color: "#3E3E3E",
    marginLeft: 15,
  },
  horizontalline: {
    backgroundColor: "#FFFFFF",
    height: 1,
    width: width,
    marginTop: 5,
    marginLeft: 15,
    shadowColor: "#00000029",
    shadowOpacity: 1,
  },
});

export default CourseDetailScreen;
