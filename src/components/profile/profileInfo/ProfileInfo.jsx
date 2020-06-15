import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
      return  <Preloader/>
    }

    return (
        <div>

            <div>
                <img className={classes.img} alt={"some img"}
                     src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                               <img src={props.profile.photos.large} alt=""/>
                               <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                               <div className={classes.descriptions}>
                                   {props.profile.fullName}
                               </div>
                               <div className={classes.descriptions}>
                                   {props.profile.userId}
                               </div>
            </div>

        </div>
    );
}

export default ProfileInfo;