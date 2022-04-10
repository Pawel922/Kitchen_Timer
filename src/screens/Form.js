import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Form = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Form to add new item</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Go back to the list</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Form;