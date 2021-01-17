import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import AddMessageForm from "../login/AddMessageForm";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message} key={el.id} id={el.id}/>)

    const addNewMassage = (values) => {
props.addMessage(values.newMessageBody)
    }


         return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements} 
            </div>
            <div className={classes.messages}>
                {messagesElements}
              <AddMessageForm   onSubmit={addNewMassage} />
            </div>
        </div>
    );
}

export default Dialogs;