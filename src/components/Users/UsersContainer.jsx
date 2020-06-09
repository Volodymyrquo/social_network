import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPage, setTotalUsersCount, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            })
    }

    onPageChanged = (pageNumber) => {
       this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)})
    }


    render() {
        return <Users
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}

                      />
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {

            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {

            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {

            dispatch(setCurrentPage(currentPage));
        },
        setTotalUsersCount: (totalCount) => {

            dispatch(setTotalUsersCount(totalCount));
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);


