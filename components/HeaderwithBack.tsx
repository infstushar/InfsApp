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
        <Appbar.BackAction
          onPress={() => {
            props.onPress();
          }}
          color="#FFFFFF"
        />

        <View style={{ width: 200 }}>
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

        <Appbar.Action
          icon="bell"
          onPress={() => {}}
          color="#FFFFFF"
          size={19}
          style={{ marginLeft: 80 }}
        />
      </Appbar.Header>
    </ImageBackground>
  );
};

export default HeaderwithBack;
