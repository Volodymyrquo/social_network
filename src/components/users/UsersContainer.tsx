import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
}

type MapDispatchPropsType = {
    getUsers: (currentPage:number, pageSize:number)=>void;
    follow: (userId:number)=>void;
    unfollow: (userId:number)=>void;
    setCurrentPage:(userId:number)=>void

}
type PropsType =  MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber:number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    //    this.props.setCurrentPage(pageNumber)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }

}

let mapStateToProps = (state:any):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,AppStateType>(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers})
    )(UsersContainer);


