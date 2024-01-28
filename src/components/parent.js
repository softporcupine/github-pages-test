import React, { useState } from "react";
import Stopwatch from "./stopwatch";
import Talker
    from "./talker";
const Parent = () => {
    const [elapsedTime, setElapsedTime] = useState(0);

    return (
        <div>
            <Stopwatch onTimeChange={setElapsedTime} />
            <Talker elapsedTime={elapsedTime} />
        </div>
    )
}

export default Parent