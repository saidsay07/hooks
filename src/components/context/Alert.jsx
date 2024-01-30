import React from "react";
import {useAlert} from "./AlertContext.jsx";

const Alert = () => {
    const alert = useAlert();

    if (!alert.alert) return null;

    return <div onClick={alert.toggle}>alert</div>;
};

export default Alert;
