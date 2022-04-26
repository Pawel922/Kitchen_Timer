import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCountDownTimer } from '../hooks/useCountDownTimer';

import GlobalStyle from '../styles/GlobalStyle';

const Product = ({ route, navigation }) => {
    const { details } = route.params;
    const [remainingMinutes, remainingSeconds] = useCountDownTimer(details.minutes, details.seconds);

    // const [timer, setTimer] = useState(details.time)
    // const [intervalId,setIntervalId] = useState(0);

    // useEffect(() => {
    //     navigation.setOptions({title: details.name});
    // },[]);

    // const handleClick = () => {
    //     if(intervalId) {
    //         clearInterval(intervalId);
    //         setIntervalId(0);
    //         return;
    //     }

    //     const newIntervalId = setInterval(() => {
    //         setTimer(prevTimer => prevTimer - 1);
    //     }, 1000);
    //     setIntervalId(newIntervalId);
    // }


    return (
        <View style={GlobalStyle.parentContainer}>
            <View>
                <Text>Name: {details.name}</Text>
                <Text>Minutes: {remainingMinutes}</Text>
                <Text>Seconds: {remainingSeconds}</Text>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle}>
                    <Text style={GlobalStyle.btnTxtStyle}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Product;