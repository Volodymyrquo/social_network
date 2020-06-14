import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message} key={el.id} id={el.id}/>)
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();

    }


    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);

    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;