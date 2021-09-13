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
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: normalize(31.5),
              fontFamily: "Poppins-SemiBold",
              color: "#FFFFFF",
              marginLeft: 10,
            }}
          >
            {props.title}
          </Text>
          <WithLocalSvg
            width={18}
            height={18}
            asset={require("../assets/Notification.svg")}
            style={{ marginLeft: width * 0.5, marginTop: 15 }}
          />
        </View>
      </Appbar.Header>
    </ImageBackground>
  );
};

export default Header;
