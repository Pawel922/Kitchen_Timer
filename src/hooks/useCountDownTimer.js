import { useEffect, useState } from 'react';

const useCountDownTimer = (targetMinutes, targetSeconds) => {
    const targetTime = targetMinutes * 60 + targetSeconds;
    const [countDown, setCountDown] = useState(targetTime);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        const newIntervalId = setInterval(() => {
            setCountDown(prevValue => prevValue - 1);
        }, 1000);
        setIntervalId(newIntervalId);

        return () => {
            clearInterval(intervalId);
            setIntervalId(0);
        };
    },[targetTime])

    if (countDown === 0) {
        clearInterval(intervalId);
    };

    return getRemainingTime(countDown);
}

const getRemainingTime = (countDown) => {
    const remainingMinutes = Math.floor(countDown / 60);
    const remainingSeconds = countDown - (remainingMinutes * 60);

    return [remainingMinutes, remainingSeconds];
};

export { useCountDownTimer };