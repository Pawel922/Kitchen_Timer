import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from 'react-hook-form';

import GlobalStyle from "../styles/GlobalStyle";

const Form = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            id: Math.floor(Math.random() * 100) + 4,
            name: '',
            minutes: 0,
            seconds: 0
        }
    });

    const onSubmit = () => {
        console.log('Everything fine');
        navigation.navigate({name: 'List'})
    };

    return (
        <View>
             <View>
                <Text>Name:</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <TextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />
                {errors.title && <Text>This is required</Text>}
                <Text>Minutes:</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <TextInput
                            multiline={true}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="minutes"
                />
                {errors.content && <Text>This is required</Text>}
                <Text>Seconds:</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <TextInput
                            multiline={true}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="seconds"
                />
                {errors.content && <Text>This is required</Text>}
            </View>
            <View style={GlobalStyle.btnContainer}>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyle.btnTxtStyle}>Go back to the list</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={handleSubmit(onSubmit)}>
                    <Text style={GlobalStyle.btnTxtStyle}>Add new product</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Form;