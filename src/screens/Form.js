import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from 'react-hook-form';

import GlobalStyle from "../styles/GlobalStyle";

const Form = ({ navigation }) => {
    const { txtInput, label, errorMsg } = styles;

    const { control, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            id: Math.floor(Math.random() * 100) + 4,
            name: '',
            minutes: '0',
            seconds: '0'
        }
    });

    const showErrorMessage = (error) => {
        if (!error) {
            return ''
        } else {
            switch (error.type) {
                case 'required':
                    return 'This is required';
                case 'min': 
                    return 'Must be a number greater or equl 0';
                case 'max':
                    return 'Must be a number less than 60'
            }
        };
    };

    const onSubmit = () => {
        navigation.navigate({name: 'List'})
    };

    return (
        <View style={GlobalStyle.parentContainer}>
             <View>
                <Text style={label}>Name:</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <TextInput
                            style={txtInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />
                <Text style={errorMsg}>{showErrorMessage(errors.name)}</Text>
                <Text style={label}>Minutes:</Text>
                <Controller
                    control={control}
                    rules={{required: true, min: 0}}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <TextInput
                            style={txtInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="minutes"
                />
                <Text style={errorMsg}>{showErrorMessage(errors.minutes)}</Text>
                <Text style={label}>Seconds:</Text>
                <Controller
                    control={control}
                    rules={{required: true, min: 0, max: 59}}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <TextInput
                            style={txtInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="seconds"
                />
                <Text style={errorMsg}>{showErrorMessage(errors.seconds)}</Text>
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={handleSubmit(onSubmit)}>
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
    txtInput: {
        fontSize: 25,
        lineHeight: 35,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#d4d9db',
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    errorMsg: {
        fontSize: 15,
        color: '#DD1040',
        marginBottom: 15,
    }
});

export default Form;