import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CountDownTimer = ({ targetMinutes, targetSeconds }) => {
    const { timerContainer, timerDisplay, valueDisplay, textDisplay } = styles;
    const [remainingTime, setRemainingTime] = useState(targetMinutes * 60 + targetSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);


    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    }

    useEffect(() => {
        if(isRunning) {
            const newIntervalId = setInterval(() => {
                setRemainingTime(prevValue => prevValue - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        } else if(isRunning === false || remainingTime === 0) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
    
        return () => {
            clearInterval(intervalId);
            setIntervalId(0);
        };
    },[isRunning]);

    const getRemainingTime = () => {
        const remainingMinutes = Math.floor(remainingTime / 60);
        const remainingSeconds = remainingTime - (remainingMinutes * 60);
        
        if(remainingTime === 0) {
            clearInterval(intervalId);
        }
        
        return [remainingMinutes, remainingSeconds];
    };


    return (
        <View style={timerContainer}>
            <View style={timerDisplay}>
                <View style={valueDisplay}>
                    <Text style={textDisplay}>
                        {getRemainingTime()[0] < 10 ? `0${getRemainingTime()[0]}` : getRemainingTime()[0]}
                    </Text>
                </View>
                <View>
                    <Text style={textDisplay}>:</Text>
                </View>
                <View style={valueDisplay}>
                    <Text style={textDisplay}>
                        {getRemainingTime()[1] < 10 ? `0${getRemainingTime()[1]}` : getRemainingTime()[1]}
                    </Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={startTimer}>
                    <Text>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={stopTimer}>
                    <Text>Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timerContainer: {
        flex: 1,
        alignItems: 'center'
    },
    timerDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 200
    },
    valueDisplay: {
        height: 150,
        width: 130,
        marginLeft: 7,
        marginRight: 7,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#d4d9db'
    },
    textDisplay: {
        fontSize: 70
    }

});

export default CountDownTimer;