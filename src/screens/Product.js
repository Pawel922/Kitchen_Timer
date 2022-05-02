import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import { useCountDownTimer } from '../hooks/useCountDownTimer';
import CountDownTimer from '../components/CountDownTimer';

import GlobalStyle from '../styles/GlobalStyle';

const Product = ({ route, navigation }) => {
    const { details } = route.params;
    //const [remainingMinutes, remainingSeconds] = useCountDownTimer(details.minutes, details.seconds);

    useEffect(() => {
        navigation.setOptions({title: details.name});
    },[]);


    return (
        <View style={GlobalStyle.parentContainer}>
            {
            /*<View>
                <Text>Name: {details.name}</Text>
                <Text>Minutes: {remainingMinutes}</Text>
                <Text>Seconds: {remainingSeconds}</Text>
            </View>>*/
            }
            <CountDownTimer targetMinutes={details.minutes} targetSeconds={details.seconds}/>
            <View style={GlobalStyle.btnContainer}>
                {
                /*<TouchableOpacity style={GlobalStyle.btnStyle}>
                    <Text style={GlobalStyle.btnTxtStyle}>Start</Text>
                </TouchableOpacity>*/
                }
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Product;