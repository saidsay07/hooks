import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    function multiplicationCount() {
        setCounter(counter * 2);
    }

    function divideCount() {
        setCounter((prev) => prev / 2);
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
            <button onClick={multiplicationCount}>*</button>
            <button onClick={() => divideCount()}>/</button>
        </>
    );
}

export default Counter;
