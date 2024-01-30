import React, {useEffect, useRef, useState} from "react";

function Dom() {
    const inputFocus = useRef(null);
    const [value, setValue] = useState("");
    const prevValue = useRef("");

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    function focus() {
        inputFocus.current.focus();
    }

    return (
        <>
            <h1>New value: {value}</h1>
            <h2>Old value: {prevValue.current}</h2>
            <input
                type="text"
                ref={inputFocus}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={focus}>focus</button>
        </>
    );
}

export default Dom;
