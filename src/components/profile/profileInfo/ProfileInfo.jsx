import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if(!profile) {
      return  <Preloader/>
    }

    return (
        <div>

            <div>
                <img className={classes.img} alt={"some img"}
                     src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                               <img src={profile.photos.large} alt=""/>
                               <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                               <div className={classes.descriptions}>
                                   {profile.fullName}
                               </div>
                               <div className={classes.descriptions}>
                                   {profile.userId}
                               </div>
            </div>

        </div>
    );
}

export default ProfileInfo;