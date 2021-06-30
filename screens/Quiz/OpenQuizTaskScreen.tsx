import { HeaderTitle } from "@react-navigation/stack";
import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import RoundedButton from "../../components/RoundedButton";
import RoundedButtonWithOutIcon from "../../components/RoundedButtonWithOutIcon";

const OpenQuizTaskScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "white", flexGrow: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", marginTop: "30%" }}>
          <WithLocalSvg
            width={"100%"}
            height={400}
            asset={require("../../assets/studentasset.svg")}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#20BEC9",
              fontSize: 18,
              textAlign: "center",
              marginHorizontal: 20,
              marginVertical: 30,
              fontFamily: "Poppins-Regular",
            }}
          >
            Start from beginning or Test to check knowledge level “Help us find
            your level"
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 30,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <RoundedButton
            style={styles.buttonStyles}
            onPress={() => {}}
            title="Start from Beginning"
            textVisible={true}
            visible={true}
            name="md-arrow-forward-circle"
          />

          <RoundedButtonWithOutIcon
            onPress={() => {}}
            title="Take test to jump ahead"
            colorChange={true}
            textVisible={true}
            visible={false}
            name="md-arrow-forward-circle"
          />
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
  buttonStyles: {
    width: "80%",
    marginBottom: 15,
  },
  testButton: {
    color: "#838383",
    width: "100%",
  },
});

export default OpenQuizTaskScreen;
