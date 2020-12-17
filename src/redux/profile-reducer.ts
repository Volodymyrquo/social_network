import {profileAPI, usersAPI} from "../api/api";
import { PostType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const  SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"

type InitialStateType = typeof initialState;

let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post.", likesCount: 15},
        {id: 3, message: "Yo.", likesCount: 15},
        {id: 4, message: "Yo.", likesCount: 15}

    ] as Array<PostType>,

    profile: null as null | ProfileType,
    status: ""
};


const profileReducer = (state = initialState, action:any):InitialStateType => {

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

type AddPostActionCreatorActionType = {type: typeof ADD_POST;newPostText:string;};
type DeletePostActionType = {type: typeof DELETE_POST, postId:number;};
type SetUserProfileActionType = {type: typeof SET_USER_PROFILE, profile:ProfileType};
type SetStatusActionType = {type: typeof SET_STATUS, status:string};



export const addPostActionCreator = (newPostText:string) => ({type: ADD_POST,newPostText});
export const deletePost = (postId:number) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile:ProfileType) =>
    ({type: SET_USER_PROFILE, profile});
export const setStatus = (status:string) => ({type: SET_STATUS, status})

export  const  getUserProfile = (userId:number) => async (dispatch:any) => {
   let response =  await usersAPI.getProfile(userId);
              dispatch(setUserProfile(response));

}
export  const  getStatus = (userId:number) => async (dispatch:any) => {
    let response =  await profileAPI.getStatus(userId)

            dispatch(setStatus(response));

}
export  const  updateStatus = (status:string) => async (dispatch:any) => {
    let response =  await  profileAPI.updateStatus(status)
                  if(response.resultCode === 0)
            {dispatch(setStatus(status));}
}


export default profileReducer;