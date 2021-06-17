import React,{useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import {WithLocalSvg}  from 'react-native-svg';

const RoundedButton = props => {

  return <View>
  {props.visible  && props.textVisible ?

  <TouchableOpacity style={{...styles.button, ...props.style}} onPress={()=>{
      props.onPress()}}>
     
      <Text  style={styles.text}>{props.title}</Text>
            <View style={styles.iconContainer}>
            <Icon  name={props.name} color='white' size={33}></Icon>
            </View>
            </TouchableOpacity>:<TouchableOpacity 
            style={styles.button1} onPress={()=>{
      props.onPress()
  }}>
     <View style={{justifyContent:'center',alignItems:'center'}} >
      {props.textVisible ?  
      <Text style={styles.text1}>{props.title}</Text> :
             <WithLocalSvg
             asset={require('../assets/Iconforward.svg')}/>}
            </View>
            </TouchableOpacity>}
            </View>

};

const styles = StyleSheet.create({
  button: {
    flexDirection:'row', height:50,
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:20,
    marginBottom:30,
    marginTop:20,
    borderRadius:40,
    backgroundColor:Colors.textColor,
  },
  button1:{
    flexDirection:'row', height:40,
    justifyContent:'center',alignItems:'center',
    paddingStart:30,paddingEnd:30,
    borderRadius:40,backgroundColor:Colors.textColor,
  },
  text:{flex:1,textAlign:'center',
  paddingLeft:40,color:'white',fontSize:18,
  fontFamily:'Poppins-Regular'},
  text1:{textAlign:'center',
  color:'white',fontSize:18,
 fontFamily:'Poppins-Regular'},
 iconContainer:{alignItems:'flex-end',
            justifyContent:'flex-end',paddingRight:10}
});

export default RoundedButton;