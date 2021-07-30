import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Animated,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/colors";
import { WithLocalSvg } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";
import RoundedButton from "../../components/RoundedButton";
const IntroSliderScreen = (props: {
  navigation: { navigate: (arg0: string, arg1: Object) => void };
}) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
  const scrollViewRef = useRef<ScrollView>(null);
  const [isSkipAndNext, setIsSkipAndNext] = useState(false);
  const [page, setPage] = useState(0);

  const { currentPage: pageIndex } = sliderState;

  const nextArrowHandler = (page: number) => {
    let gotoPage = 1;
    if (page == 2) {
      gotoPage = 2;
    } else if (page == 3) {
      gotoPage = 3;
    }

    if (gotoPage === 3) {
      launchHomeScreen();
    } else {
      if (page !== pageIndex) {
        setSliderState({ ...sliderState, currentPage: page });
      }
      scrollViewRef.current?.scrollTo({
        x: width * page,
        y: 0,
        animated: false,
      });
    }
  };
  const launchHomeScreen = () => {
    props.navigation.navigate("Preference", { login: false });
    //Alert.alert('Next Screen Wii be Loaded');
    // props.navigation.navigate("Path", { login: false });
  };

  const skipHandler = () => {
    launchHomeScreen();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const { currentPage } = sliderState;
            const x = event.nativeEvent.contentOffset.x;
            const indexOfNextScreen = Math.round(x / width);
            if (indexOfNextScreen !== currentPage) {
              setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
              });
              console.log("currntPage", currentPage);
            }
            if (pageIndex === 2) {
              setIsSkipAndNext(true);
            } else {
              setIsSkipAndNext(false);
            }
          }}
          ref={scrollViewRef}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              height,
              width,
            }}
          >
            <View>
              <WithLocalSvg
                width={width}
                height={400}
                asset={require("../../assets/vector1.svg")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#21BDC8",
                  fontFamily: "Poppins-Bold",
                }}
              >
                The Knowledge you need
              </Text>

              <View>
                <Text
                  style={{
                    color: "#838383",
                    fontSize: 18,
                    textAlign: "center",
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Looking for authentic evidence backed health and nutrition
                  knowledge? You’re at the right place!
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {console.log("pageIndex", pageIndex)}
              {Array.from(Array(3).keys()).map((key, index) => (
                <View
                  style={[
                    styles.paginationDots,
                    { width: pageIndex === index ? 30 : 10 },
                    { opacity: pageIndex === index ? 1 : 0.6 },
                  ]}
                  key={index}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              flex: 1,

              height,
              width,
            }}
          >
            <View>
              <WithLocalSvg
                width={"100%"}
                height={400}
                asset={require("../../assets/vector2.svg")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#21BDC8",
                  fontFamily: "Poppins-Bold",
                }}
              >
                Education that Empowers
              </Text>

              <View>
                <Text
                  style={{
                    color: "#838383",
                    fontSize: 18,
                    textAlign: "center",
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Our courses are designed for everyone by a highly experienced
                  group of researchers and faculty members
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {console.log("pageIndex", pageIndex)}
              {Array.from(Array(3).keys()).map((key, index) => (
                <View
                  style={[
                    styles.paginationDots,
                    { width: pageIndex === index ? 30 : 10 },
                    { opacity: pageIndex === index ? 1 : 0.6 },
                  ]}
                  key={index}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              flex: 1,

              height,
              width,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <WithLocalSvg
                width={"100%"}
                height={400}
                asset={require("../../assets/vector3.svg")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#21BDC8",
                  fontFamily: "Poppins-Bold",
                }}
              >
                Interactive Platform
              </Text>

              <View>
                <Text
                  style={{
                    color: "#838383",
                    fontSize: 18,
                    textAlign: "center",
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  You will have access to live lectures, Discussion forums,
                  cutting edge content and a spectacular community of fitness
                  professional
                </Text>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  {console.log("pageIndex", pageIndex)}
                  {Array.from(Array(3).keys()).map((key, index) => (
                    <View
                      style={[
                        styles.paginationDots,
                        { width: pageIndex === index ? 30 : 10 },
                        { opacity: pageIndex === index ? 1 : 0.6 },
                      ]}
                      key={index}
                    />
                  ))}
                </View>

                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    textAlign: "center",
                    marginHorizontal: 10,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Already have an account?
                </Text>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    onPress={() => {
                      props.navigation.navigate("Login", { login: true });
                    }}
                    style={{
                      textDecorationLine: "underline",
                      fontFamily: "Poppins-Regular",
                      marginTop: 5,
                      color: "#7A5F36",
                    }}
                  >
                    Login here
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <View
          style={{
            marginBottom: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {console.log('pageIndex', pageIndex)}
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {width: pageIndex === index ? 30 : 10},
                {opacity: pageIndex === index ? 1 : 0.6},
              ]}
              key={index}
            />
          ))}
            </View>*/}

        {!isSkipAndNext ? (
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/*<Text style={{color: 'white', fontSize: 18,fontFamily: 'Poppins-Regular'}} onPress={skipHandler}>
              SKIP
          </Text>*/}

            {/*<View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {console.log("pageIndex", pageIndex)}
              {Array.from(Array(3).keys()).map((key, index) => (
                <View
                  style={[
                    styles.paginationDots,
                    { width: pageIndex === index ? 30 : 10 },
                    { opacity: pageIndex === index ? 1 : 0.6 },
                  ]}
                  key={index}
                />
              ))}
                </View>*/}
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              {!isSkipAndNext ? (
                <Text
                  style={{
                    color: "#3D433E",
                    fontSize: 18,

                    marginRight: 10,
                    fontFamily: "Poppins-Regular",
                  }}
                  onPress={skipHandler}
                >
                  Skip
                </Text>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* <Icon
                name="arrow-forward"
                color="#19B6C1"
                size={33}
                onPress={() => {
                  const index = pageIndex + 1;
                  nextArrowHandler(index);
                }}
              />*/}

              {/*<TouchableOpacity 
        onPress={()=>{
          const index = pageIndex + 1;
          nextArrowHandler(index);
        }}
        style={{flexDirection:'row', height:40,
        justifyContent:'center',alignItems:'center',
        paddingStart:25,paddingEnd:25,
        borderRadius:40,backgroundColor:Colors.textColor,}}>
            <View style={{alignItems:'center'}}>
               <WithLocalSvg
             asset={require('../../assets/Iconforward.svg')} />
             </View>
      </TouchableOpacity>*/}

              <RoundedButton
                onPress={() => {
                  const index = pageIndex + 1;
                  nextArrowHandler(index);
                }}
                title="Next"
                textVisible={true}
                visible={false}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              marginRight: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ alignItems: "flex-start", marginRight: 10 }}>
              {!isSkipAndNext ? (
                <Text
                  style={{
                    color: "#3D433E",
                    fontSize: 18,
                    marginTop: 20,
                    marginRight: 10,
                    fontFamily: "Poppins-Regular",
                  }}
                  onPress={skipHandler}
                >
                  Skip
                </Text>
              ) : null}
            </View>
            {/*  <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              {console.log("pageIndex", pageIndex)}
              {Array.from(Array(3).keys()).map((key, index) => (
                <View
                  style={[
                    styles.paginationDots,
                    { width: pageIndex === index ? 30 : 10 },
                    { opacity: pageIndex === index ? 1 : 0.6 },
                  ]}
                  key={index}
                />
              ))}
                </View>*/}
            {/*  <Button title="GET STARTED" onPress={launchHomeScreen} />*/}
            {/*<TouchableOpacity 
        onPress={()=>{
            launchHomeScreen()
        }}
        style={{flexDirection:'row', height:40,
        justifyContent:'center',alignItems:'center',
        paddingStart:30,paddingEnd:30,
        borderRadius:40,backgroundColor:Colors.textColor,}}>
            <Text  style={{textAlign:'center',
            alignItems:'center',
            color:'white',fontSize:18,
            fontFamily:'Poppins-Regular'}}>Get Started</Text> 
      </TouchableOpacity>*/}

            <RoundedButton
              onPress={() => {
                launchHomeScreen();
              }}
              title="Get Started"
              textVisible={true}
              visible={false}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  skipContainer: {
    alignItems: "flex-end",
  },
  paginationDots: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 10 / 2,
    backgroundColor: "#19B6C1",
  },
  roundedButton: {
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 20,
    justifyContent: "center",
    borderColor: "#888",
  },
});
export default IntroSliderScreen;
