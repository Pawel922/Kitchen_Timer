import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyle from "../styles/GlobalStyle";

const List = ({ navigation }) => {
    return (
        <View style={GlobalStyle.parentContainer}>
            <View>
                <Text>List of itmes</Text>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.navigate('Form')}>
                    <Text style={GlobalStyle.btnTxtStyle}>Add new item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default List;