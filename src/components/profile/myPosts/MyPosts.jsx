import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import AddPostForm from "../../login/AddPostForm";


const MyPosts = (props) => {
console.log("RENDER")
    let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} count={post.likesCount}/>)

const addNewPost = (values) => {
        props.addPost(values.newPostText)
}
       return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
              <AddPostForm onSubmit={addNewPost}/>
            </div>
            <div className={classes.posts}>

                {postsElements}

            </div>
        </div>

    );
}

export default MyPosts;