import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timer, setTimer] = useState(null);

    const start = () => {
        setStartTime(Date.now() - elapsedTime);
        setTimer(setInterval(updateTime, 10));
    };

    const stop = () => {
        clearInterval(timer);
        setTimer(null);
    };

    const updateTime = () => {
        setElapsedTime(Date.now() - startTime);
    };

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    const handleStartStop = () => {
        if (timer) {
            stop()
        } else {
            start();
        }
    };

    return (
        <div>
            <button onClick={handleStartStop}>
                {timer ? 'Stop' : 'Start'}
            </button>
            <span>{("0" + Math.floor((elapsedTime / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((elapsedTime / 1000) % 60)).slice(-2)}.</span>
            <span>{("0" + ((elapsedTime / 10) % 100)).slice(-2)}</span>
        </div>
    );
};

export default Stopwatch

