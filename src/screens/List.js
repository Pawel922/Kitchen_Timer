import React, { useContext} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import GlobalStyle from "../styles/GlobalStyle";

import { ProductsContext} from "../contexts/ProductsContext";

const List = ({ navigation }) => {

    const { productList } = useContext(ProductsContext);
    
    return (
        <View style={GlobalStyle.parentContainer}>
            <View style={styles.listContainer}>
                <FlatList 
                    data={productList}
                    renderItem={({ item }) => <ListItem data={item} navigation={navigation}/>}
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