import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id}/>)
    let newMessageElement = React.createRef();

    let addMassage = () => {
        props.addMessage();
    }


    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMassage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;