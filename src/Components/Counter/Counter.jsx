"use client"

import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)
    return (
        <div>
            <div>
                <h2>Counter Value : {counter}</h2>
            </div>
            <div className="flex justify-start gap-3">
                <button className="btn" onClick={() => setCounter(counter + 1)} > Inc </button>
                <button className="btn" onClick={() => setCounter(counter - 1)}> dec </button>
            </div>
        </div>
    );
};

export default Counter;