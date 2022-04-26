import { useEffect, useState } from 'react';

const useCountDownTimer = (targetMinutes, targetSeconds) => {
    const targetTime = targetMinutes * 60 + targetSeconds;
    const [countDown, setCountDown] = useState(targetTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown(prevValue => prevValue - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    },[targetTime])

    return getRemainingTime(countDown);
}

const getRemainingTime = (countDown) => {
    const remainingMinutes = Math.floor(countDown / 60);
    const remainingSeconds = countDown - (remainingMinutes * 60);
    
    return [remainingMinutes, remainingSeconds];
};

export { useCountDownTimer };