import React, {useEffect, useState} from "react";

function Request() {
    const [type, setType] = useState("users");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [type]);
    return (
        <>
            <h1>Content: {type}</h1>
            <button onClick={() => setType("users")}>users</button>
            <button onClick={() => setType("todos")}>todos</button>
            <button onClick={() => setType("posts")}>posts</button>
            {data.map((item) => {
                return <p key={item.id}>{item.title || item.name}</p>;
            })}
        </>
    );
}

export default Request;
