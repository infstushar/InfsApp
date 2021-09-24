import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WithLocalSvg } from "react-native-svg";

const FilterScreen = (props) => {
  return (
    <View
      style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 70,
        backgroundColor: "#FFFFFF",
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#3E3E3E",
              textDecorationLine: "underline",
            }}
          >
            Clear all
          </Text>
          <TouchableOpacity
            style={{
              width: 40,
              backgroundColor: "#00B5E0",
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 250,
              marginTop: 5,
            }}
            onPress={() => {
              props.onPress();
            }}
          >
            <WithLocalSvg
              width={21}
              height={20}
              asset={require("../../assets/filter.svg")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E6E7E9",
            width: 360,
            height: 200,
            margin: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 17.5,
              color: "#3E3E3E",
            }}
          >
            Corse Catagory
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E6E7E9",
            width: 360,
            height: 90,
            margin: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 17.5,
              color: "#3E3E3E",
            }}
          >
            Tags
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E6E7E9",
            width: 360,
            height: 140,
            margin: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 17.5,
              color: "#3E3E3E",
            }}
          >
            Duration
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E6E7E9",
            width: 360,
            height: 100,
            margin: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 17.5,
              color: "#3E3E3E",
            }}
          >
            Cost
          </Text>
        </View>
      </ScrollView>

      <View style={{ backgroundColor: "#FAFAFA" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            width: "35%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 29,

            backgroundColor: "#00B5E0",
            shadowColor: "#00000029",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
            marginLeft: 127,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: 15.75,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilterScreen;
