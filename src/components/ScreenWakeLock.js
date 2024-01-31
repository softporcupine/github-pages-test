import React, { useState, useEffect } from 'react';

const ScreenWakeLock = () => {
    const [wakeLock, setWakeLock] = useState(null);
    const [isLocked, setIsLocked] = useState(false);

    const requestWakeLock = async () => {
        try {
            if ('wakeLock' in navigator && !wakeLock) {
                const lock = await navigator.wakeLock.request('screen');
                setWakeLock(lock);
                setIsLocked(true);
            }
        } catch (error) {
            console.error(`Failed to acquire a wake lock: ${error.message}`);
            // Handle the error, possibly display a message to the user
        }
    };

    const releaseWakeLock = () => {
        if (wakeLock) {
            wakeLock.release().then(() => {
                setWakeLock(null);
                setIsLocked(false);
            });
        }
    };

    useEffect(() => {
        // Clean up wake lock when component unmounts or wake lock state changes
        return () => {
            if (wakeLock) {
                wakeLock.release().then(() => {
                    setWakeLock(null);
                    setIsLocked(false);
                });
            }
        };
    }, [wakeLock]);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isLocked}
                    onChange={() => (isLocked ? releaseWakeLock() : requestWakeLock())}
                />
                Keep screen on
            </label>
        </div>
    );
};

export default ScreenWakeLock;