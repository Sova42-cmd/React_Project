import './Counter.css'

import { useState } from "react";
function Counter() {

    // let A = 0;

    const [A, setA] = useState(0);

    const increase = () => {
        setA(A+1);
    };

    const decrease = () => {
        setA(A-1);
    };

    const reset = () => {
        setA(0);
    };

    return (
        <div className="Counter">
            <h2>Counter: {A}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;