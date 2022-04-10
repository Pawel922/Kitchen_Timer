import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const List = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>List of itmes</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Form')}>
                    <Text>Add new item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default List;