import React,{useEffect, useState} from 'react';
import {  View,Text ,StyleSheet, TouchableOpacity, FlatList, Alert} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Chip ,ToggleButton} from 'react-native-paper';

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
  
const PreferenceScreen = (props: { navigation: { navigate: (arg0: string) => void; }; })=>{
    const[currentPosition,setCurrentPosition]=useState(0);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const[preference,setPreference]=useState([]);
    const PAGES = ['Page 1', 'Page 2', 'Page 3'];

    const [selected, setSelected] = useState(false);
    const [chipPressed, setChipPressed] = useState(false);
    
const [textColor, setTextColor] = useState(`#FBA200`);
const [style, setStyle] = useState({ borderColor: `#FBA200`, backgroundColor: `white` });

useEffect(() => {
    if (selected) {
        setTextColor(`white`);
        setStyle({ borderColor: `#FBA200`, backgroundColor: `#FBA200` });
    } else {
        setTextColor(`#FBA200`);
        setStyle({ borderColor: `#FBA200`, backgroundColor: `transparent` });
    }
}, [selected]);

const handlePress = () => {
    setSelected(!selected);
    if (selected) {
      setStyle({ borderColor: `#FBA200`, backgroundColor: `#FBA200` });
      setChipPressed(selected);
    }
};


    const DATA = [
        {
          id: '0',
          title: 'Nutrition',
          checked:false
        },
        {
          id: '1',
          title: 'Exercise Science',
          checked:false
        },
        {
          id: '2',
          title: 'Yoga',
          checked:false
        },
        {
            id: '3',
            title: 'Mindfulness',
            checked:false
          },
      ];

      const DATA1 = [
        {
          id: '0',
          title: 'Personal',
          checked:false
        },
        {
          id: '1',
          title: 'Entrepreneur',
          checked:false
        },
        {
          id: '2',
          title: 'Upskill',
          checked:false
        },
        {
            id: '3',
            title: 'Coach',
            checked:false
          },
      ];

      const DATA2 = [
        {
          id: '0',
          title: 'Facebook',
          checked:false
        },
        {
          id: '1',
          title: 'Friends & Family',
          checked:false
        },
        {
          id: '2',
          title: 'Instagram',
          checked:false
        },
        {
            id: '3',
            title: 'Linkedin',
            checked:false
          },
          {
            id: '4',
            title: 'Internet Read',
            checked:false
          },
      ];

     
      const[list,setList]=useState(DATA);
      const[list1,setList1]=useState(DATA1);
      const[list2,setList2]=useState(DATA2);
      
      const onCheck = (id) => {
        let items = list;
        items[id].checked = items[id].checked ? ! items[id].checked : true
        console.log(items[id].checked);
       setList(items);
        
      }

      const onCheck1 = (id) => {
        let items = list1;
        items[id].checked = items[id].checked ? ! items[id].checked : true
       setList1(items);
  
      }

      const onCheck2 = (id) => {
        let items1 = list2;
        items1[id].checked = items1[id].checked ? ! items1[id].checked : true
        setList2(items1);
  
      }

    //console.log(currentPage);

      const Item = ({ title,id}) => (
        <View style={styles.item}>
          {list[id].checked ?
        <Chip 
         style={{backgroundColor:'#34B44D'}} onPress={() => {
         onCheck(id);
         console.log(list[id].checked);
         console.log(preference.toString());
         
        
        setPreference([...preference,{title}] )}}><Text style={{color:'white'}}>{title}</Text></Chip>
        :  <Chip 
        style={{backgroundColor:'#E6E7E9'}} onPress={() => {
        onCheck(id);
        console.log(list);
       setPreference([...preference,title] )}}><Text style={{color:'black'}}>{title}</Text></Chip>
}
        </View>
      );
      

      const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id}/>
      );



      const Item1 = ({ title,id}) => (
        <View style={styles.item}>
          {list1[id].checked ?
        <Chip 
         style={{backgroundColor:'#34B44D'}} onPress={() => {
         onCheck1(id);
        setPreference([...preference,title] )}}><Text style={{color:'white'}}>{title}</Text></Chip>
        :  <Chip 
        style={{backgroundColor:'#E6E7E9'}} onPress={() => {
        onCheck1(id);
       setPreference([...preference,title] )}}><Text style={{color:'black'}}>{title}</Text></Chip>
}
        </View>
      );
      

      const renderItem1= ({ item }) => (
        <Item1 title={item.title} id={item.id}/>
      );


      const Item2 = ({ title,id}) => (
        <View style={styles.item}>
          {list2[id].checked ?
        <Chip 
         style={{backgroundColor:'#34B44D'}} onPress={() => {
         onCheck2(id);
        setPreference([...preference,title] )}}><Text style={{color:'white'}}>{title}</Text></Chip>
        :  <Chip 
        style={{backgroundColor:'#E6E7E9'}} onPress={() => {
        onCheck2(id);
       setPreference([...preference,title] )}}><Text style={{color:'black'}}>{title}</Text></Chip>
}
        </View>
      );
      

      const renderItem2= ({ item }) => (
        <Item2 title={item.title} id={item.id}  />
      );


      
    const onStepPress = (position: number) => {
        setCurrentPage(position);
      };
      
    return <View style={styles.container}>
        <View style={{marginTop:20}}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
         // onPress={onStepPress}
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
        onPress={()=>{ onStepPress(1)}}
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
         {currentPage===1?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontFamily:'Poppins-Bold',
             color:'#555555',
             fontSize:18
             }}>Select your Reason</Text>
             <Text style={{fontSize:16,marginTop:10, fontFamily:'Poppins-Regular',color:'#838383'}}>Let’s find your purpose</Text>
            
            <View style={{height:200}}>
             <FlatList
             data={DATA1}
             numColumns={2}
            renderItem={renderItem1}
        keyExtractor={item => item.id}
        />
        </View>
             <TouchableOpacity 
        onPress={()=>{ onStepPress(2)
         }}
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
         {currentPage===2?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontFamily:'Poppins-Bold',
             color:'#555555',
             fontSize:18,
             textAlign:'center',
             marginVertical:10
             }}>Where did you hear About INFS?</Text>
            
  
            <View style={{height:200}}>
             <FlatList
             data={DATA2}
             numColumns={2}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
        />
        </View>
             <TouchableOpacity 
        onPress={()=>{ onStepPress(2)
          
          const uniqueData = [...new Set(preference)];
          Alert.alert(uniqueData.toString());
          props.navigation.navigate('Login');
        }}
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