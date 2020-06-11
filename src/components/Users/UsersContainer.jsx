import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                    .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items)
            })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}

            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UsersContainer);


