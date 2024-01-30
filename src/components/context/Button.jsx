import React from "react";

import {useAlert} from "./AlertContext.jsx";

const Button = () => {
    const alert = useAlert();
    return <button onClick={alert.toggle}>toggle alert</button>;
};

export default Button;
