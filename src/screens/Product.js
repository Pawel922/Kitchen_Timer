import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import GlobalStyle from '../styles/GlobalStyle';

const Product = ({ route, navigation }) => {
    const { details } = route.params;

    useEffect(() => {
        navigation.setOptions({title: details.name});
    },[]);


    return (
        <View style={GlobalStyle.parentContainer}>
            <View>
                <Text>Name: {details.name}</Text>
                <Text>Time: {details.time}</Text>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Product;