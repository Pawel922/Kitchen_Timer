import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import GlobalStyle from "../styles/GlobalStyle";

const Form = ({ navigation }) => {
    return (
        <View style={GlobalStyle.parentContainer}>
            <View>
                <Text>Form to add new item</Text>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Form;