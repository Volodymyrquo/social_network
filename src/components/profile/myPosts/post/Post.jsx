import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
                    <div className={classes.item}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7v7fQOygZEYtT-1uiVrzxeOovPIYD9tLagvKC7Wf-vZjvaX-I&usqp=CAU' />
                      {props.message}
                        <div>
                        <span>{props.count} likes</span>
                        </div>
                    </div>

               );
}

export default Post;