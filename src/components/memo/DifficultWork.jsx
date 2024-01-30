import React, {useEffect, useMemo, useState} from "react";

function complexCompute(number) {
    console.log("number");
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    for (let i = 0; i < 100000000; i++) {
    }
    return number * 2;
}

function DifficultWork() {
    const [number, setNumber] = useState(24);
    const [color, setColor] = useState(false);

    const compute = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    let styles = {
        color: color ? "red" : "green",
    };

    useEffect(() => {
        console.log("color");
    }, [styles]);

    return (
        <>
            <h1 style={styles}>
                {compute}, {color ? "true" : "false"}
            </h1>
            <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
            <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
            <button onClick={() => setColor((prev) => !prev)}>color</button>
        </>
    );
}

export default DifficultWork;
