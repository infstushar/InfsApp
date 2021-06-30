import { HeaderTitle } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import {  View,Text ,StyleSheet} from 'react-native';
import {WithLocalSvg}  from 'react-native-svg';
import RoundedButton from '../../components/RoundedButton';

const OpenQuizTaskScreen =()=>{
    return <ScrollView contentContainerStyle={{backgroundColor:'white',flex:1, justifyContent:'center',alignItems:'center'}}>
        <View>
        <View style={{alignItems:'center' ,marginTop:'25%'}}>
               <WithLocalSvg
                width={'100%'}
                height={400}
             asset={require('../../assets/quiz.svg')} />
             </View>
             <View
              style={{
                alignItems: 'center',
                justifyContent:'center',
                
              }}>
              <Text style={{fontSize: 20,alignContent:'center', color: '#21BDC8', fontFamily: 'Poppins-Bold'}}>
             Introduction to health and 
              </Text>
               <Text style={{fontSize: 20,alignContent:'center', color: '#21BDC8', fontFamily: 'Poppins-Bold'}}>
              nutrition?
              </Text>

              <View>
                <Text
                  style={{
                    color: '#838383',
                    fontSize: 18,
                    textAlign: 'center',
                    marginHorizontal: 10,
                    marginVertical: 30,
                    fontFamily: 'Poppins-Regular'
                  }}>
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
              </View>
            </View>
            <RoundedButton  onPress={()=>{
        }} title='Start Quiz' textVisible={true} visible={true} name='md-arrow-forward-circle'/>
            </View>
    </ScrollView>
}


const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default OpenQuizTaskScreen;