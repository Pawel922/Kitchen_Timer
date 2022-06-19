import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import GlobalStyle from "../styles/GlobalStyle";

const Form = ({ navigation }) => {

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
                <Text>{inputMinutes}</Text>
                <TouchableOpacity onPress={() => handleInputMinutes(1)}>
                    <Text>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInputMinutes(5)}>
                    <Text>+5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInputMinutes(10)}>
                    <Text>+10</Text>
                </TouchableOpacity>
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


export default Form;