import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if(!userId) {
            this.props.history.push("/login");
        }
this.props.getUserProfile(userId);
this.props.getStatus(userId);

    }

    render() {


        return <Profile {...this.props} />
}


}

let mapPropsToState = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});
export default compose(
    connect(mapPropsToState,{getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);