import React, {useEffect, useRef, useState} from "react";

const Render = () => {
    const renderCount = useRef(0);
    const [value, setValue] = useState("");

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <>
            <h1>render count {renderCount.current}</h1>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </>
    );
};

export default Render;
