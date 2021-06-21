import React from 'react';
import {  View,Text ,StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
const dummy =()=>{
    return <View style={styles.screen}>
        <Calendar
        style={{width:350,margin:16}}
        enableSwipeMonths={true}
  // Initially visible month. Default = Date()
markedDates={{
    '2021-06-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
    '2021--26': {dots: [massage, workout], disabled: true}
  }}
  markingType={'multi-dot'}
/>
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