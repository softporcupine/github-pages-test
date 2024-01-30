import React, { useState } from "react";
import Stopwatch from "./stopwatch";
import Talker
    from "./talker";
const Parent = () => {
    const [elapsedTime, setElapsedTime] = useState(0);

    return (
        <main>
            <Stopwatch onTimeChange={setElapsedTime} />
            <Talker elapsedTime={elapsedTime} />
        </main>
    )
}

export default Parent