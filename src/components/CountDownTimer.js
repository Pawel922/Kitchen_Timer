import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CountDownTimer = ({ targetMinutes, targetSeconds }) => {
    const { timerBtnContainer, timerBtn, timerBtnTxt, timerContainer, timerDisplay, valueDisplay, textDisplay } = styles;
    const initialTime = targetMinutes * 60 + targetSeconds;
    const [remainingTime, setRemainingTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);


    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
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
            <View style={timerBtnContainer}>
                <View style={isRunning ? {opacity: 1} : {opacity: 0.3}}>
                    <TouchableOpacity 
                        onPress={pauseTimer} 
                        style={{...timerBtn, backgroundColor: '#DD1040'}}
                        disabled={isRunning ? false : true}
                    >
                        <Text style={timerBtnTxt}>Pause</Text>
                    </TouchableOpacity>
                </View>
                <View style={isRunning ? {opacity: 0.3} : {opacity: 1}}>  
                    <TouchableOpacity 
                        onPress={startTimer} 
                        style={{...timerBtn, backgroundColor: '#86A922'}} 
                        disabled={isRunning ? true : false}
                    >
                        <Text style={timerBtnTxt}>{initialTime === remainingTime ? 'Start' : 'Resume'}</Text>
                    </TouchableOpacity>
                </View>
                
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
    },
    timerBtnContainer: {
        flexDirection: 'row'
    },
    timerBtn: {
        height: 70,
        width: 120,
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 2
    },
    timerBtnTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

export default CountDownTimer;