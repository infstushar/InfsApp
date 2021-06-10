import React from 'react';
import {  View,Text ,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../../constants/colors';

const BookScreen =(props)=>{
    return <View style={styles.screen}>
        <Text style={{fontFamily:'Poppins-Bold',color:Colors.forgotbg}}>NOT IMPLEMENTED YET!!!</Text>
    </View>
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default BookScreen;