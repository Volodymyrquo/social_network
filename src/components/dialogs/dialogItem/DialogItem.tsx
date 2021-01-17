import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
type PropsType = {
    name:string;
      id:number;
}
const DialogsItem:React.FC<PropsType> = ({name,id}) => {

    let path = '/dialogs/' + id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} activeClassName={classes.activeLink}>{name}</NavLink>
        </div>
    );
}



export default DialogsItem;