import React, { useEffect, useState } from "react";

const toSpeak = {
    1: "Get ready",
    5: "Tuck chin, lift head, arms back",
    7: "Hold",
    11: "Hold",
    14: "Hold",
    16: "Relax",
    24: "Tuck chin, lift head, arms back",
    28: "Hold",
    31: "Hold",
    35: "Relax",
    44: "Tuck chin, lift head, arms back",
    48: "Hold",
    51: "Hold",
    55: "Relax",
    64: "Tuck chin, lift head, arms back",
    68: "Hold",
    71: "Hold",
    75: "Relax",
    84: "Tuck chin, lift head, arms back",
    88: "Hold",
    91: "Hold",
    95: "Relax",
    104: "Tuck chin, lift head, arms back",
    108: "Hold",
    111: "Hold",
    115: "Relax",
    124: "Tuck chin, lift head, arms back",
    128: "Hold",
    131: "Hold",
    135: "Relax",
    144: "Tuck chin, lift head, arms back",
    148: "Hold",
    151: "Hold",
    155: "Relax",
    164: "Tuck chin, lift head, arms back",
    168: "Hold",
    171: "Hold",
    175: "Relax",
    184: "Tuck chin, lift head, arms back",
    188: "Hold",
    191: "Hold",
    195: "Relax",
    197: "All done, have a good day"
}

const Talker = ({ elapsedTime }) => {
    const [lastSpokenTime, setLastSpokenTime] = useState(0);
    const [spokenWords, setSpokenWords] = useState("");

    useEffect(() => {
        const elapsedTimeInSeconds = Math.floor(elapsedTime);

        if (elapsedTimeInSeconds == 0) {
            setLastSpokenTime(elapsedTimeInSeconds);
        }

        if (toSpeak[elapsedTimeInSeconds] && elapsedTimeInSeconds > lastSpokenTime) {
            console.log(toSpeak[elapsedTimeInSeconds]);
            const textToSpeak = new SpeechSynthesisUtterance(toSpeak[elapsedTimeInSeconds]);
            speechSynthesis.speak(textToSpeak);
            setLastSpokenTime(elapsedTimeInSeconds);
            setSpokenWords(toSpeak[elapsedTimeInSeconds])
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
            <h1>{spokenWords}</h1>
        </div>
    )
}

export default Talker