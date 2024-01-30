import React from "react";
import Alert from "./Alert.jsx";
import Button from "./Button.jsx";
import {AlertProvider} from "./AlertContext.jsx";

const Main = () => {
    return (
        <AlertProvider>
            <Alert/>
            <Button/>
        </AlertProvider>
    );
};

export default Main;
