import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountDownTimer from '../components/CountDownTimer';

import GlobalStyle from '../styles/GlobalStyle';

const Product = ({ route, navigation }) => {
    const { details } = route.params;
    
    useEffect(() => {
        navigation.setOptions({title: details.name});
    },[]);


    return (
        <View style={GlobalStyle.parentContainer}>
            <CountDownTimer targetMinutes={details.minutes} targetSeconds={details.seconds}/>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Product;