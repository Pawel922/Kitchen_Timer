import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Product = ({ data }) => {
    const { productContainer, detailBtn, editBtn, deleteBtn, txtBtn} = styles;
    return (
        <View style={productContainer}>
            <TouchableOpacity style={detailBtn}>
                <Text style={{...txtBtn, fontSize: 18, fontWeight: 'bold'}}>{data.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={editBtn}>
                <Text style={{...txtBtn, color: 'white'}}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={deleteBtn}>
                <Text style={{...txtBtn, color: 'white'}}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginBottom: 8,
        borderColor: '#808080',
        borderRadius: 10,
        borderWidth: 2
    },
    detailBtn: {
        flexGrow: 1,
        paddingLeft: 10,
    },
    editBtn: {
        width: 60,
        marginLeft: 5,
        alignItems: 'center',
        backgroundColor: '#EE782D',
        borderRadius: 5
    },
    deleteBtn: {
        width: 60,
        marginLeft: 5,
        marginRight: 3,
        alignItems: 'center',
        backgroundColor: '#DD1040',
        borderRadius: 5
    },
    txtBtn: {
        lineHeight: 50,
        fontSize: 16
    }
})

export default Product;