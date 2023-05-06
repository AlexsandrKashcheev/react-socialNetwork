import React from "react";
import PostModule from './Post.module.css';


const Post = (props) => {
    console.log(props.message);
    return(
        <div className={PostModule.post_container}>
            <div className={PostModule.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg?w=1470&r=0.5625" /> 
                <div className="post">
                    {props.message}
                </div>
            </div>
            <button className={PostModule.like_button}>
                like <span>{props.likeCounter}</span>
            </button>
        </div>
    );
}

export default Post;