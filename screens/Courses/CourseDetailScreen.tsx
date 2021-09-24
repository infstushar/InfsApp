import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
  Platform,
  PixelRatio,
} from "react-native";
import CourseContentScreen from "../../components/CourseContentScreen";
import { ScrollView } from "react-native-gesture-handler";

import Swiper from "react-native-swiper";
import Header from "../../components/HeaderwithBack";
import { WithLocalSvg } from "react-native-svg";

import { Card, Chip, List } from "react-native-paper";
import Font from "../../constants/Font";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

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
      style={{
        marginRight: 5,
        height: 25,
        alignItems: "center",
        marginTop: 10,

        backgroundColor: "#F4F4F4",
      }}
      textStyle={{
        fontSize: Font.p2,
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
        <WithLocalSvg
          width={10}
          height={7}
          asset={require("../../assets/dot-svgrepo-com.svg")}
          style={{ marginTop: 5, marginLeft: 5 }}
        />
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
        <WithLocalSvg
          width={10}
          height={10}
          asset={require("../../assets/Path1128.svg")}
          style={{ marginTop: 7, marginLeft: 15 }}
        />
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
        <WithLocalSvg
          width={10}
          height={7}
          asset={require("../../assets/dot-svgrepo-com.svg")}
          style={{ marginTop: 5, marginLeft: 5 }}
        />
        <View style={styles.bulletText}>
          <Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: Font.p1,
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
            <WithLocalSvg
              width={12}
              height={12}
              asset={require("../../assets/Icon-ionic-ios-star-(1).svg")}
              style={{ marginTop: 4 }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: Font.p1,
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
                fontSize: Font.p1,
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
              fontSize: Font.p1,
              color: "#3E3E3E",
              paddingBottom: 10,

              marginTop: 10,
            }}
          >
            {DATA[0].title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textStyleForheaderMedium}>{DATA[0].level}</Text>
            <View style={styles.hairline} />
            <Text style={styles.textStyleForheaderMedium}>Last updated on</Text>
            <Text style={styles.textStyleForheaderMedium}>
              {DATA[0].update}
            </Text>
            <View style={styles.hairline} />
            <Text style={styles.textStyleForheaderMedium}>{DATA[0].lang}</Text>
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
                fontSize: Font.p1,
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
                fontSize: Font.p1,
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
            <WithLocalSvg
              width={28}
              height={18}
              asset={require("../../assets/Icon-material-group.svg")}
              style={{ marginTop: 5 }}
            />

            <Text
              style={{
                paddingLeft: 5,
                fontFamily: "Poppins-Medium",
                fontSize: Font.p1,
                color: "#3E3E3E",
                marginTop: 5,
              }}
            >
              {DATA[0].stud} Students Enrolled
            </Text>
            <View style={{ flexDirection: "row" }}>
              <WithLocalSvg
                width={21}
                height={22}
                asset={require("../../assets/Icon-ionic-ios-stopwatch.svg")}
                style={{ marginTop: 3, marginLeft: 10 }}
              />
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: Font.p1,
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
              fontSize: Font.h5,
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
            fontSize: Font.h5,
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
              fontSize: Font.h5,
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
          <WithLocalSvg
            width={14}
            height={15}
            asset={require("../../assets/Icon-ionic-ios-arrow-dropdown-circle.svg")}
            style={{ marginTop: 5 }}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              color: "#3E3E3E",
              marginLeft: 15,
              fontSize: Font.h5,
              fontFamily: "Poppins-SemiBold",
              marginTop: 5,
            }}
          >
            Course Description
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: Font.p1,
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
              fontSize: Font.h5,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Course Eligibility
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: Font.p1,
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
              fontSize: Font.h5,
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
              fontSize: Font.h5,
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
              height: height * 0.35,
              backgroundColor: "#FFFFFF",
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
                          fontSize: Font.h5,
                          fontFamily: "Poppins-Medium",
                        }}
                      >
                        Virendra Tilekar
                      </Text>
                      <Text
                        style={{
                          color: "#3E3E3E",
                          marginLeft: 15,
                          fontSize: Font.p1,
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        Foundation Course,
                      </Text>
                    </View>

                    <Chip
                      disabled
                      style={{
                        width: 50,
                        height: 20,
                        alignItems: "center",
                        backgroundColor: "#37B84C",
                        marginLeft: 50,
                        marginTop: 15,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",

                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: Font.p2,
                            fontFamily: "Poppins-Medium",
                            color: "#FFFFFF",
                            marginTop: 7,
                          }}
                        >
                          {DATA[0].star}
                        </Text>

                        <WithLocalSvg
                          width={12}
                          height={12}
                          asset={require("../../assets/Iconionic-ios-star.svg")}
                          style={{ marginLeft: 3, marginTop: 5 }}
                        />
                      </View>
                    </Chip>
                  </View>

                  <Text
                    style={{
                      fontSize: Font.p1,
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
                          fontSize: Font.h5,
                          fontFamily: "Poppins-Medium",
                        }}
                      >
                        Virendra Tilekar
                      </Text>
                      <Text
                        style={{
                          color: "#3E3E3E",
                          marginLeft: 15,
                          fontSize: Font.p1,
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        Foundation Course,
                      </Text>
                    </View>
                    <Chip
                      disabled
                      style={{
                        width: 50,
                        height: 20,
                        alignItems: "center",
                        backgroundColor: "#37B84C",
                        marginLeft: 50,
                        marginTop: 15,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",

                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: Font.p2,
                            fontFamily: "Poppins-Medium",
                            color: "#FFFFFF",
                            marginTop: 7,
                          }}
                        >
                          {DATA[0].star}
                        </Text>

                        <WithLocalSvg
                          width={12}
                          height={12}
                          asset={require("../../assets/Iconionic-ios-star.svg")}
                          style={{ marginLeft: 3, marginTop: 5 }}
                        />
                      </View>
                    </Chip>
                  </View>
                  <Text
                    style={{
                      fontSize: Font.p1,
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
            fontSize: Font.h5,
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
                  fontSize: Font.p2,
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
                style={{ backgroundColor: "#F4F4F4" }}
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
                  fontSize: Font.p2,
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
                style={{ backgroundColor: "#F4F4F4" }}
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
                  fontSize: Font.p2,
                  fontFamily: "Poppins-Medium",
                  color: "#3E3E3E",
                }}
                style={{ backgroundColor: "#F4F4F4" }}
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
              fontSize: Font.h5,
              color: "#3E3E3E",
            }}
          >
            Course Cost
          </Text>
          <View style={{ flexDirection: "row" }}>
            <WithLocalSvg
              width={12}
              height={14}
              asset={require("../../assets/Iconawesome-rupee-sign.svg")}
              style={{ marginTop: 5 }}
            />
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: Font.h5,
                color: "#3E3E3E",
                marginTop: 2,
                marginLeft: 3,
              }}
            >
              {DATA[0].price}
            </Text>
          </View>
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
              fontSize: Font.h6,
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
    marginRight: 5,
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
    marginLeft: 5,
  },
  boldText: {
    fontFamily: "Poppins-Regular",
    fontSize: Font.p1,
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
  textStyleForheaderMedium: {
    fontFamily: "Poppins-Medium",
    fontSize: Font.p1,
    color: "#3E3E3E",
  },
});

export default CourseDetailScreen;
