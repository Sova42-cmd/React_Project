import {useState} from "react";
import './Counter.css'


function Counter() {

    const [tiv, useTiv] = useState(0)

    const plus = () => {
        useTiv(tiv+1)
    }
    const minus = () => {
        useTiv(tiv-1)
    }
    const zero = () => {
        useTiv(0)

    }

    return (
        <div>
            <h2>3.0 Counter {tiv}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={zero}>Reset</button>
        </div>
    )
}
export default Counter;