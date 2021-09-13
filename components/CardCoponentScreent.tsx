import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  PixelRatio,
  Image,
} from "react-native";
import { Card, Paragraph, Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { WithLocalSvg } from "react-native-svg";

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

const CardCoponentScreent = (props) => {
  return (
    <Card
      style={styles.card}
      onPress={() => {
        props.onPress();
      }}
    >
      <Card.Content>
        <Image
          source={props.Img}
          style={{
            width: width * 0.94,
            height: height * 0.25,
            position: "absolute",
            top: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            resizeMode: "stretch",
          }}
        ></Image>
        <Chip
          disabled
          style={{
            width: 50,
            height: 20,
            alignItems: "center",
            backgroundColor: "#37B84C",
            marginLeft: width * 0.73,
            marginTop: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: normalize(12),
                fontFamily: "Poppins-Medium",
                color: "#FFFFFF",
                marginTop: 7,
              }}
            >
              5.0
            </Text>

            <WithLocalSvg
              width={12}
              height={12}
              asset={require("../assets/Iconionic-ios-star.svg")}
              style={{ marginLeft: 3, marginTop: 5 }}
            />
          </View>
        </Chip>

        <Paragraph style={{ marginTop: height * 0.22 }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: normalize(17.5),
                  color: "#3E3E3E",
                  lineHeight: normalize(25),
                  paddingBottom: 10,
                }}
              >
                {props.title}
              </Text>
            </View>
            <View style={{ width: width * 0.8, height: 70 }}>
              <Text
                numberOfLines={3}
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: normalize(14),
                  color: "#838383",
                  lineHeight: normalize(24),
                }}
              >
                {props.description}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <Image
                source={require("../assets/abc.jpeg")}
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
                  lineHeight: normalize(24),
                  marginLeft: 5,
                }}
              >
                Instructor:
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(14),
                  color: "#3E3E3E",
                  lineHeight: normalize(24),
                  paddingLeft: 5,
                }}
              >
                {props.author}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 50,
                }}
              >
                <WithLocalSvg
                  width={12}
                  height={14}
                  asset={require("../assets/Iconawesome-rupee-sign.svg")}
                  style={{ marginTop: 5 }}
                />
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: normalize(17.5),
                    color: "#3E3E3E",
                    marginLeft: 5,
                    lineHeight: normalize(24),
                  }}
                >
                  {props.price}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 2 }}>
              <WithLocalSvg
                width={22}
                height={14}
                asset={require("../assets/Iconmaterial-group(2).svg")}
                style={{ marginTop: 3 }}
              />
              <Text
                style={{
                  paddingLeft: 5,
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(14),
                  color: "#3E3E3E",

                  lineHeight: normalize(24),
                }}
              >
                {props.studentEnroll} Students Enrolled
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <WithLocalSvg
                width={18}
                height={19}
                asset={require("../assets/Iconionic-ios-stopwatch(1).svg")}
                style={{}}
              />
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: normalize(14),
                  color: "#3E3E3E",
                  paddingLeft: 5,

                  lineHeight: normalize(24),
                }}
              >
                {props.hrs} hours
              </Text>
            </View>
          </View>
        </Paragraph>

        <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 15 }}>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 5, height: 25, alignItems: "center" }}
            textStyle={{
              fontSize: normalize(14),
              fontFamily: "Poppins-Regular",
              color: "#3E3E3E",
            }}
          >
            {props.tag}
          </Chip>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 5, height: 25, alignItems: "center" }}
            textStyle={{
              fontSize: normalize(14),
              fontFamily: "Poppins-Regular",
              color: "#3E3E3E",
            }}
          >
            Fitness
          </Chip>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 5, height: 25, alignItems: "center" }}
            textStyle={{
              fontSize: normalize(14),
              fontFamily: "Poppins-Regular",
              color: "#3E3E3E",
            }}
          >
            Health
          </Chip>
          <Chip
            onPress={() => console.log("Pressed")}
            style={{ marginRight: 5, height: 25, alignItems: "center" }}
            textStyle={{
              fontSize: normalize(14),
              fontFamily: "Poppins-Regular",
              color: "#3E3E3E",
            }}
          >
            Health
          </Chip>
        </View>
        <View style={{ height: height * 0.5 }}></View>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "#0000001A",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: "#FFFFFF",
    elevation: 10,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 20,
    width: width * 0.94,
    height: height * 0.54,
  },
});

export default CardCoponentScreent;
