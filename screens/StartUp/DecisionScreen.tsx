import React from "react";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";

import { WithLocalSvg } from "react-native-svg";
import RoundedButton from "../../components/RoundedButton";
import Font from "../../constants/Font";

const { width, height } = Dimensions.get("window");

const DecisionScreen = (props: {
  navigation: { navigate: (arg0: string, arg1: Object) => void };
}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <View style={{ marginTop: "25%" }}>
          <WithLocalSvg
            width={"100%"}
            asset={require("../../assets/BasicCourseVector.svg")}
          />
        </View>

        <View>
          <Text
            style={{
              color: "#555555",
              fontSize: Font.h4,
              textAlign: "center",
              marginTop: 20,
              marginHorizontal: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            Start from beginning or{"\n"}
            Test to check knowledge level{"\n"}
            “Help us find your level"
          </Text>
        </View>
        <View style={{ marginTop: height * 0.08 }}>
          <RoundedButton
            onPress={() => {
              props.navigation.navigate("Home", { login: false });
            }}
            title="Start my Learning"
            textVisible={true}
            visible={true}
          />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "90%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
              paddingStart: 30,
              paddingEnd: 30,
              borderRadius: 29,
              backgroundColor: "#EDEDED",
              marginTop: 20,
              marginBottom: 20,
            }}
            onPress={() => {
              props.navigation.navigate("Quiz", { login: false });
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: "#838383",
                fontSize: Font.h5,
                fontFamily: "Poppins-Regular",
              }}
            >
              Take test to jump ahead
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DecisionScreen;
