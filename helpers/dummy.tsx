import { HeaderTitle } from '@react-navigation/stack';
import React from 'react';
import {  View,Text ,StyleSheet} from 'react-native';

const dummy =()=>{
    return <View style={styles.screen}>
        <Text>Dummy Screen</Text>
    </View>
}


const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default dummy;