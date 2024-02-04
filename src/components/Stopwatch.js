import React, { useState, useRef, useEffect } from 'react';

const Stopwatch = ({ onTimeChange }) => {
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0);
    const intervalRef = useRef(null);

    // Interval to update elapsedTime and elapsedTimeInSeconds
    useEffect(() => {
        if (startTime) {
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const newElapsedTime = now - startTime;
                setElapsedTime(newElapsedTime);

                const newElapsedTimeInSeconds = Math.floor(newElapsedTime / 1000);
                if (newElapsedTimeInSeconds !== elapsedTimeInSeconds) {
                    setElapsedTimeInSeconds(newElapsedTimeInSeconds);
                    onTimeChange(newElapsedTimeInSeconds);
                }
            }, 10);

            return () => {
                onTimeChange(0);
                return clearInterval(intervalRef.current)
            };
        }
    }, [startTime, elapsedTimeInSeconds, onTimeChange]);

    function handleStart() {
        setStartTime(Date.now());
        setElapsedTime(0);
        setElapsedTimeInSeconds(0);
        // Clear any existing interval to ensure no duplicates
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    return (
        <>
            <p>Time passed: {(elapsedTime / 1000).toFixed(2)} seconds</p>
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

