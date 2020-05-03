import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img className={classes.img}
                     src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;