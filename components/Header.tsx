import * as React from "react";
import { Appbar } from "react-native-paper";
import {
  Dimensions,
  Platform,
  PixelRatio,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";

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

const Header = (props) => {
  return (
    <ImageBackground
      source={require("../assets/Background3x.png")}
      resizeMode="cover"
      style={{ width: width }}
    >
      <Appbar.Header style={{ backgroundColor: "transparent" }}>
        {/*<Appbar.Content
        title={props.title}
        color="#FFFFFF"
        titleStyle={{
          fontWeight: "500",
          fontSize: normalize(31),
          marginRight: 150,
        }}
        style={{}}
      />*/}
        <View>
          <Text
            style={{
              fontSize: normalize(31),
              fontFamily: "Poppins-SemiBold",
              color: "#FFFFFF",
              marginLeft: 10,
            }}
          >
            {props.title}
          </Text>
        </View>

        <Appbar.Action
          icon="bell"
          onPress={() => {}}
          color="#FFFFFF"
          size={22}
          style={{ marginLeft: 200 }}
        />
      </Appbar.Header>
    </ImageBackground>
  );
};

export default Header;
