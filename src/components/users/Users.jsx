import React from "react";
import classes from './users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users, ...props}) => {

    return (

        <div className={classes.user}>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}


            />
<div>
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  follow={props.follow}
                                  unfollow={props.unfollow}
                                                                    key={u.id}/>



           )}
</div>
        </div>

    )
}

export default Users;

