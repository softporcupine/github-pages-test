import React, { useState, useRef, useEffect } from 'react';

const Stopwatch = ({ onTimeChange }) => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        let secondsPassed = 0;
        if (startTime != null && now != null) {
            secondsPassed = (now - startTime) / 1000;
        }
        onTimeChange(secondsPassed);
    }, [now, startTime, onTimeChange]);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <p>Time passed: {secondsPassed.toFixed(2)} seconds</p>
            <button className="stopwatch--button-start" onClick={handleStart}>
                Start
            </button>
            <button className="stopwatch--button-stop" onClick={handleStop}>
                Stop
            </button>
        </>
    );
}


export default Stopwatch

