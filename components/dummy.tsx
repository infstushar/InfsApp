import React from 'react';
import {  View,Text ,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const dummy =(props)=>{
    return <View style={{flexDirection:'column',alignItems:'flex-end', justifyContent:'flex-end',flex:1}} >
        
        <Button onPress={()=>{
            props.navigation.navigate('Preference')
        }}>GO TO Details </Button>
<Button onPress={()=>{
            props.navigation.navigate('ResetPassword')
        }}>Reset Password</Button>
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