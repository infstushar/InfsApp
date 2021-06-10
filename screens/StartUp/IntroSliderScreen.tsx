import React, {useState, useRef, useEffect} from 'react';
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
} from 'react-native';
//import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
const IntroSliderScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');
  const scrollViewRef = useRef<ScrollView>(null);
  const [isSkipAndNext, setIsSkipAndNext] = useState(false);
  const [page, setPage] = useState(0);

  const {currentPage: pageIndex} = sliderState;

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
        setSliderState({...sliderState, currentPage: page});
      }
      scrollViewRef.current?.scrollTo({
        x: width * page,
        y: 0,
        animated: false,
      });
    }
  };
  const launchHomeScreen = () => {
    props.navigation.navigate('Login');
    //Alert.alert('Next Screen Wii be Loaded');
  };

  const skipHandler = () => {
    launchHomeScreen();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#4e4e4e'}}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            const {currentPage} = sliderState;
            const x = event.nativeEvent.contentOffset.x;
            const indexOfNextScreen = Math.round(x / width);
            if (indexOfNextScreen !== currentPage) {
              setSliderState({...sliderState, currentPage: indexOfNextScreen});
              console.log('currntPage', currentPage);
            }
            if (pageIndex === 2) {
              setIsSkipAndNext(true);
            } else {
              setIsSkipAndNext(false);
            }
          }}
          ref={scrollViewRef}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              height,
              width,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginBottom: '50%',
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 20, color: 'white', fontFamily: 'Poppins-Bold'}}>
                Lorem ipsum-1
              </Text>

              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: 'Poppins-Regular'
                  }}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              height,
              width,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginBottom: '50%',
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 20, color: 'white', fontFamily: 'Poppins-Bold'}}>
                Lorem ipsum-2
              </Text>

              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: 'Poppins-Regular'
                  }}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              height,
              width,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginBottom: '50%',
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 20, color: 'white', fontFamily: 'Poppins-Bold'}}>
                Lorem ipsum-3
              </Text>

              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: 'Poppins-Regular'
                  }}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginBottom: '20%',
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
        </View>

        {!isSkipAndNext ? (
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontSize: 18,fontFamily: 'Poppins-Regular'}} onPress={skipHandler}>
              SKIP
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
             
              <Icon
                name="arrow-forward"
                color="white"
                size={33}
                onPress={() => {
                  const index = pageIndex + 1;
                  nextArrowHandler(index);
                }}
              />
            </View>
          </View>
        ) : (
          <Button title="GET STARTED" onPress={launchHomeScreen} />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  skipContainer: {
    alignItems: 'flex-end',
  },
  paginationDots: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 10 / 2,
    backgroundColor: 'white',
  },
  roundedButton: {
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 20,
    justifyContent: 'center',
    borderColor: '#888',
  },
});
export default IntroSliderScreen;