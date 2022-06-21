import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import GlobalStyle from "../styles/GlobalStyle";

const Form = ({ navigation }) => {
    const { minutesContainer, changeBtn, changeBtnTxt, largeSize, mediumSize, smallSize, timeDisplay} = styles;
    const [inputName, setInputName] = useState('');
    const [inputMinutes, setInputMin] = useState(0);
    
    const onSubmit = () => {
        navigation.navigate({name: 'List'})
    };

    const handleInputName = (text) => {
        setInputName(text);
    }

    const handleInputMinutes = (value) => {
        setInputMin(prev => prev + value);
    }

    return (
        <View style={GlobalStyle.parentContainer}>
            <View>
                <TextInput onChangeText={handleInputName} value={inputName}/>
                <View style={minutesContainer}>
                    <TouchableOpacity onPress={() => handleInputMinutes(-10)} style={[changeBtn, largeSize]}>
                        <Text style={changeBtnTxt}>-10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleInputMinutes(-5)} style={[changeBtn, mediumSize]}>
                        <Text style={changeBtnTxt}>-5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleInputMinutes(-1)} style={[changeBtn, smallSize]}>
                        <Text style={changeBtnTxt}>-1</Text>
                    </TouchableOpacity>
                    <Text style={timeDisplay}>{inputMinutes}</Text>
                    <TouchableOpacity onPress={() => handleInputMinutes(1)} style={[changeBtn, smallSize]}>
                        <Text style={changeBtnTxt}>+1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleInputMinutes(5)} style={[changeBtn, mediumSize]}>
                        <Text style={changeBtnTxt}>+5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleInputMinutes(10)} style={[changeBtn, largeSize]}>
                        <Text style={changeBtnTxt}>+10</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={onSubmit}>
                    <Text style={GlobalStyle.btnTxtStyle}>Add new product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    minutesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    changeBtn: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    largeSize: {
        width: 55,
        height: 55,
    },
    mediumSize: {
        width: 45,
        height: 45,
    },
    smallSize: {
        width: 35,
        height: 35,
    },
    changeBtnTxt: {
        fontSize: 17,
    },
    timeDisplay: {
        padding: 7,
        fontSize: 30
    }
});

export default Form;