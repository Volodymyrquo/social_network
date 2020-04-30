import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
                <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    <Post message='Hi, how are you?' count='10'/>
                    <Post message="It's my first post." count='25'/>

                </div>
            </div>

    );
}

export default MyPosts;