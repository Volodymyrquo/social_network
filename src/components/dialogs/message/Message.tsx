import React from "react";
import classes from "./../Dialogs.module.css";
type PropsType = {
    message:string;
}
const Message:React.FC<PropsType> = ({message}) => {
    return <div className={classes.message}>{message}</div>
}


export default Message;