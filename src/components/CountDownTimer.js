import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CountDownTimer = ({ targetMinutes, targetSeconds }) => {
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
        <View>
            <Text>Minutes: {getRemainingTime()[0]}</Text>
            <Text>Seconds: {getRemainingTime()[1]}</Text>
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

export default CountDownTimer;