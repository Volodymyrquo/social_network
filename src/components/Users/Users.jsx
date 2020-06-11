import React from "react";
import classes from './users.module.css';
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

const  Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i<=pageCount; i++){
        pages.push(i);
    }
    return (

    <div className={classes.user}>
        <div>
        {pages.map(p => <span className={props.currentPage === p && classes.selectedPage}  onClick={()=>{props.onPageChanged(p)}}>{p}</span>)}
        </div>
       { props.users.map(u => <div key={u.id}>
<span>
    <div>
        <NavLink to={"/profile/" + u.id }>
        <img src={u.photos.small?u.photos.small:userPhoto} className={classes.userPhoto}/>
        </NavLink>
    </div>
    <div>
            {u.followed ?
                <button onClick={() =>
{ usersAPI.unfollow(u.id)
    .then(response => {if(response.resultCode === 0){ props.unfollow(u.id)}})}
                  }>
                    Unfollow</button> :
                <button onClick={() =>
                    {   usersAPI.follow(u.id)
                        .then(response => {if(response.resultCode === 0){ props.follow(u.id)}})}
                }>
                Follow</button>}
         </div>
</span>
<span>
    <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{"location.country"}</div>
        <div>{"location.city"}</div>
    </span>
</span>

    </div>  )}
    </div>

)
}

export default Users;

