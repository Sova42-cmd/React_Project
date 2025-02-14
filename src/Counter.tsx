import { useState } from "react";
function Counter() {

    let A = 0;

    const [counter, setCounter] = useState(A);

    const increase = () => {
        A = A + 1;
        setCounter(A);
    };

    const decrease = () => {
        A = A-1;
        setCounter(A);
    };

    const reset = () => {
        A = 0;
        setCounter(A);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;