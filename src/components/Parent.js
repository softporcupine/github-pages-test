import React, { useState } from "react";
import Stopwatch from "./Stopwatch";
import Talker from "./Talker";
import ScreenWakeLock from "./ScreenWakeLock";

const Parent = () => {
    const [elapsedTime, setElapsedTime] = useState(0);

    return (
        <main>
            <Stopwatch onTimeChange={setElapsedTime} />
            <Talker elapsedTime={elapsedTime} />
            <ScreenWakeLock />
        </main>
    )
}

export default Parent