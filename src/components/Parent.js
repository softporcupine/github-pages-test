import React, { useState } from "react";
import Stopwatch from "./Stopwatch";
import Talker from "./Talker";
import ScreenWakeLock from "./ScreenWakeLock";
import Editor from "./Editor";

const Parent = () => {
    const [elapsedTimeSeconds, setElapsedTimeSeconds] = useState(0);
    const [showEditor, setShowEditor] = useState(false);

    function handleButton() {
        setShowEditor(prevVal => !prevVal)
    }

    let mainScreen;
    let buttonText = "Back"
    if (showEditor) {
        mainScreen =
            <>
                <Stopwatch onTimeChange={setElapsedTimeSeconds} />
                <Talker elapsedTimeSeconds={elapsedTimeSeconds} />
                <ScreenWakeLock />
            </>
        buttonText = "Edit speech"
    } else {
        mainScreen =
            <>
                <Editor />
            </>
    }

    return (
        <>
            <button className="parent--nav-button" onClick={handleButton}>{buttonText}</button>
            <main>
                {mainScreen}
            </main>
        </>
    )
}

export default Parent