import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state =  {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post.", likesCount: 15},
        {id: 3, message: "Yo.", likesCount: 15},
        {id: 4, message: "Yo.", likesCount: 15}

    ]

};

it('length of post should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);
expect(newState.posts.length).toBe(5);
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
expect(newState.posts.length).toBe(3);
});