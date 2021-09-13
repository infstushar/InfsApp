import * as React from "react";
import { Appbar } from "react-native-paper";
import {
  Dimensions,
  Platform,
  PixelRatio,
  View,
  Text,
  ImageBackground,
} from "react-native";
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

const HeaderwithBack = (props) => {
  return (
    <ImageBackground
      source={require("../assets/Background3x.png")}
      resizeMode="cover"
      style={{ width: width }}
    >
      <Appbar.Header style={{ backgroundColor: "transparent" }}>
        <View style={{ width: normalize(200), flexDirection: "row" }}>
          <WithLocalSvg
            width={24}
            height={16}
            asset={require("../assets/Icon-ionic-ios-arrow-round-back_white.svg")}
            style={{ marginLeft: 15, marginTop: 7 }}
            onPress={() => {
              props.onPress();
            }}
          />
          <View style={{ width: width * 0.5 }}>
            <Text
              style={{
                fontSize: normalize(21),
                fontFamily: "Poppins-SemiBold",
                color: "#FFFFFF",
                marginLeft: 10,
              }}
              numberOfLines={1}
            >
              {props.title}
            </Text>
          </View>

          <WithLocalSvg
            width={18}
            height={18}
            asset={require("../assets/Notification.svg")}
            style={{ marginLeft: width * 0.25, marginTop: 7 }}
          />
        </View>
      </Appbar.Header>
    </ImageBackground>
  );
};

export default HeaderwithBack;
