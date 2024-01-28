import React, { useEffect, useState } from "react";

const Talker = ({ elapsedTime }) => {
    const [lastSpokenTime, setLastSpokenTime] = useState(0);

    useEffect(() => {
        const elapsedTimeInSeconds = Math.floor(elapsedTime);
        // Check if elapsed time is a multiple of 10
        if (elapsedTimeInSeconds % 10 === 0 && elapsedTimeInSeconds > lastSpokenTime) {
            const textToSpeak = new SpeechSynthesisUtterance(`${elapsedTimeInSeconds} seconds`);
            speechSynthesis.speak(textToSpeak);
            setLastSpokenTime(elapsedTimeInSeconds);
        }
    }, [elapsedTime, lastSpokenTime]);

    return (
        <div>
            <pre>will speak every 10 seconds</pre>
        </div>
    )
}

export default Talker