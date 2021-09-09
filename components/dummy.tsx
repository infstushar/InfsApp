import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const dummy = (props: {
  navigation: { navigate: (arg0: string, arg1: Object) => void };
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        flex: 1,
      }}
    >
      <Button
        onPress={() => {
          props.navigation.navigate("ResetPassword", { login: false });
        }}
      >
        Reset Password
      </Button>
      <Button
        onPress={() => {
          props.navigation.navigate("Login", { login: true });
        }}
      >
        LogOut
      </Button>
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

export default dummy;
