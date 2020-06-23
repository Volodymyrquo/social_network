import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const  SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"

let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post.", likesCount: 15},
        {id: 3, message: "Yo.", likesCount: 15},
        {id: 4, message: "Yo.", likesCount: 15}

    ],

    profile: null,
    status: ""
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            {let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }

                let stateCopy = {...state};
                stateCopy.posts = [...state.posts];
                stateCopy.posts.push(newPost);

            return stateCopy;}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId )}
            case SET_USER_PROFILE:
        return {...state, profile: action.profile}
        case SET_STATUS:
        return {...state, status: action.status}
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})

export  const  getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
}
export  const  getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response));
        })
}
export  const  updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.resultCode === 0)
            {dispatch(setStatus(status));}
        })
}


export default profileReducer;