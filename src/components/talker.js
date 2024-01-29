import React, { useEffect, useState } from "react";

const toSpeak = {
    1: "Get ready",
    5: "Tuck chin, lift head, arms back",
    7: "Hold",
    11: "Hold",
    14: "Hold",
    16: "Release"
}

const Talker = ({ elapsedTime }) => {
    const [lastSpokenTime, setLastSpokenTime] = useState(0);

    useEffect(() => {
        const elapsedTimeInSeconds = Math.floor(elapsedTime);

        if (toSpeak[elapsedTimeInSeconds] && elapsedTimeInSeconds > lastSpokenTime) {
            console.log(toSpeak[elapsedTimeInSeconds]);
            const textToSpeak = new SpeechSynthesisUtterance(toSpeak[elapsedTimeInSeconds]);
            speechSynthesis.speak(textToSpeak);
            setLastSpokenTime(elapsedTimeInSeconds);
        }

        // Check if elapsed time is a multiple of 10
        // if (elapsedTimeInSeconds % 10 === 0 && elapsedTimeInSeconds > lastSpokenTime) {
        //     const textToSpeak = new SpeechSynthesisUtterance(`${elapsedTimeInSeconds} seconds`);
        //     speechSynthesis.speak(textToSpeak);
        //     setLastSpokenTime(elapsedTimeInSeconds);
        // }
    }, [elapsedTime, lastSpokenTime]);

    return (
        <div>
            <pre>will speak every 10 seconds</pre>
        </div>
    )
}

export default Talker