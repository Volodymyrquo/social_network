import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.img}
                    src="https://lh3.googleusercontent.com/proxy/G-egasVucf4KiT5vUZZ4j9Anr_6t0LAidECmD8W7QnazSzw-0fBhpyVXHaB1s7pppgZSteEX2lP7JZu2zzoD7QnLfMgRKTegdYBQ9V2CCMv9fvFtBTKM_kc" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
                   </div>
    );
}

export default Profile;