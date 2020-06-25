import React from "react";
import classes from './users.module.css';
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

const Users = ({user, followingInProgress,follow,unfollow}) => {

    return (

         <div>
<span>
    <div>
        <NavLink to={"/profile/" + user.id}>
        <img src={user.photos.small ? user.photos.small : userPhoto} className={classes.userPhoto}/>
        </NavLink>
    </div>
    <div>
            {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
          unfollow(user.id);
                }
                }>
                    Unfollow</button> :
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                }
                }>
                    Follow</button>}
         </div>
</span>
                <span>
    <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
    </span>
    <span>
        <div>{"location.country"}</div>
        <div>{"location.city"}</div>
    </span>
</span>


        </div>

    )
}

export default Users;

