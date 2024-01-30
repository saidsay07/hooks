import React, {useState} from "react";

function Update() {
    const [data, setData] = useState({
        title: "State",
        id: Date.now(),
        is: false,
    });

    function updateTitle() {
        if (data.is) {
            setData({...data, title: "New state", is: !data.is});
        } else {
            setData({...data, title: "State", is: !data.is});
        }
    }

    return (
        <>
            <h1>
                {data.title}, {data.id}
            </h1>
            <button onClick={updateTitle}>update</button>
        </>
    );
}

export default Update;
