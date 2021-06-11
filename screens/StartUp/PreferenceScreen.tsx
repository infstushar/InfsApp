import React,{useState} from 'react';
import {  View,Text ,StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Chip } from 'react-native-paper';

const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorFinishedColor: '#4aae4f',
    separatorUnFinishedColor: '#a4d4a5',
    stepIndicatorFinishedColor: '#4aae4f',
    stepIndicatorUnFinishedColor: '#a4d4a5',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: '#4aae4f',
  };
  
const PreferenceScreen =()=>{
    const[currentPosition,setCurrentPosition]=useState(0);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const PAGES = ['Page 1', 'Page 2', 'Page 3'];

    const DATA = [
        {
          id: '1',
          title: 'Nutrition',
        },
        {
          id: '2',
          title: 'Exercise Science',
        },
        {
          id: '3',
          title: 'Yoga',
        },
        {
            id: '4',
            title: 'Mindfulness',
          },
      ];

      const Item = ({ title }) => (
        <View style={styles.item}>
        <Chip selectedColor='#33B14C' style={{backgroundColor:'#E6E7E9'}} onPress={() => console.log('Pressed')}>{title}</Chip>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    const renderViewPagerPage = (data: any) => {
        return (
          <View key={data} style={styles.page}>
            <Text>{data}</Text>
          </View>
        );
        }    

    const onStepPress = (position: number) => {
        setCurrentPage(position);
      };
      
    return <View style={styles.container}>
        <View style={{marginTop:20}}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
          stepCount={3}
        />
        </View>
        <Swiper
        style={{ flexGrow: 1 }}
        loop={false}
        index={currentPage}
        autoplay={false}
        dotColor='white'
        activeDotColor='white'
        onIndexChanged={(page) => {
          setCurrentPage(page);
          console.log(currentPage);
        }}>
          <View style={{flex:1}}>
         {currentPage===0?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontFamily:'Poppins-Bold',
             color:'#555555',
             fontSize:18
             }}>Select Your Interests</Text>
             <Text style={{fontSize:16,marginTop:10, fontFamily:'Poppins-Regular',color:'#838383'}}>Help us learn more about you</Text>
            
            <View style={{height:200}}>
             <FlatList
             data={DATA}
             numColumns={2}
            renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </View>
             <TouchableOpacity 
        onPress={()=>{ }}
        style={{flexDirection:'row', height:45,
        justifyContent:'space-between',
        width:'80%',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        marginBottom:'15%',marginTop:20,
        borderRadius:40,backgroundColor:Colors.textColor,}}>
            <Text  style={{flex:1,textAlign:'center',
            paddingLeft:40,color:'white',fontSize:18,
            fontFamily:'Poppins-Regular'}}>Continue</Text>
            <View style={{alignItems:'flex-end',
            justifyContent:'flex-end',paddingRight:10}}>
            <Icon  name='md-arrow-forward-circle' color='white' size={33}></Icon>
            </View>
       </TouchableOpacity>
             </View>:null}
         {currentPage===1?<Text>ASF1</Text>:null}
         {currentPage===2?<Text>ASF2</Text>:null}
       </View>
      </Swiper>
    </View>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    stepIndicator: {
      marginVertical: 50,
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepLabel: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#999999',
    },
    stepLabelSelected: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#4aae4f',
    },
    item: {
       padding:10,
      },
      title: {
        fontSize: 32,
      },
  });
export default PreferenceScreen;