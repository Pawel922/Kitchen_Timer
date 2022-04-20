import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";

import GlobalStyle from "../styles/GlobalStyle";

const productList = [
    {id: 1, name: 'Egg', time: 3},
    {id: 2, name: 'Pasta', time: 7},
    {id: 3, name: 'Rice', time: 15}
];

const List = ({ navigation }) => {
    return (
        <View style={GlobalStyle.parentContainer}>
            <View style={styles.listContainer}>
                <FlatList 
                    data={productList}
                    renderItem={({ item }) => <ListItem data={item}/>}
                    keyExtractor={item => item.id}>
                </FlatList>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.navigate('Form')}>
                    <Text style={GlobalStyle.btnTxtStyle}>Add new item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    }
});

export default List;