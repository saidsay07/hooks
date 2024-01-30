import React, {useEffect, useState} from "react";

function Position() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        });
    }, []);
    return (
        <>
            <h1>
                {position.x}, {position.y}
            </h1>
        </>
    );
}

export default Position;
