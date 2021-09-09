import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { WithLocalSvg } from "react-native-svg";
import Header from "../../components/HeaderwithBack";

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

const UnitVideoTextScreen = (props) => {
  return (
    <View style={{ width, height, flex: 1 }}>
      <Header
        title="What is Fitness"
        onPress={() => {
          props.navigation.navigate("UnitScreen");
        }}
      />
      <Image
        source={require("../../assets/banner5.jpeg")}
        style={{ width: width, height: height * 0.3 }}
      />
      <ScrollView style={{ backgroundColor: "#FFFFFF", flexGrow: 1 }}>
        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#FAFAFA",
              marginTop: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: normalize(17.5),
                color: "#3E3E3E",
                lineHeight: normalize(28),
              }}
            >
              Physical fitness is just a leaf of a tree known
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: normalize(17.5),
                color: "#3E3E3E",
                lineHeight: normalize(28),
              }}
            >
              as Health and can be defined as the
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: normalize(17.5),
                color: "#3E3E3E",
                lineHeight: normalize(28),
              }}
            >
              physical ability to perform and enjoy daily
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: normalize(17.5),
                color: "#3E3E3E",
                lineHeight: normalize(28),
              }}
            >
              activities with ease.
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: normalize(15.75),
              lineHeight: normalize(24.5),
              color: "#838383",
              paddingLeft: 2,
            }}
          >
            Physical fitness can be achieved by regularly engaging in
            moderate-intensity physical exercise, proper nutrition, and taking
            sufficient rest (Tremblay et al, 2010). A lot of people use the
            word, getting ‘fit’ and getting ‘healthy’ interchangeably. A person
            can be fit, and not very healthy, and vice-versa. The best way to
            understand this is to balance both, health and fitness, sides.
            American nutritionist Victor Lindlahr quoted the line “you are what
            you eat” in 1930, which means nutrition is the string that ties
            Health and Fitness together.
          </Text>
        </View>
      </ScrollView>
      <View style={{ backgroundColor: "#FAFAFA", flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            width: "35%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 30,
            borderRadius: 29,
            backgroundColor: "#EDEDED",
            shadowColor: "#00000029",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
            marginLeft: 40,
          }}
          onPress={() => {
            props.navigation.navigate("UnitTextScreen");
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "#838383",
              fontSize: normalize(15.75),
              fontFamily: "Poppins-Regular",
            }}
          >
            Previous Lesson
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            width: "35%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 30,
            borderRadius: 29,
            backgroundColor: "#00B5E0",
            shadowColor: "#00000029",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
            marginLeft: 40,
          }}
          onPress={() => {
            props.navigation.navigate("UnitTextScreenFirst");
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
            Next Lesson
          </Text>
        </TouchableOpacity>
      </View>
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

export default UnitVideoTextScreen;
