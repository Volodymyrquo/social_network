import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './dialogItem/DialogItem';
import Message from './message/Message';
import AddMessageForm from '../login/AddMessageForm';
import { DialogType,MessageType } from "../../redux/dialogs-reducer";

type PropsType = {
    dialogs:Array<DialogType>;
    messages:Array<MessageType>;
    addMessage:(newMessageBody:string)=>void;
}

const Dialogs:React.FC<PropsType> = ({dialogs,messages,addMessage}) => {
  let dialogsElements = dialogs.map((dialog) => (
    <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = messages.map((el) => (
    <Message message={el.message} key={el.id} />
  ));

  const addNewMassage = (values:any) => {
    addMessage(values.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <AddMessageForm onSubmit={addNewMassage} />
      </div>
    </div>
  );
};

export default Dialogs;
