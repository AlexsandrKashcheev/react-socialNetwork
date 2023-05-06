import React from 'react';
import MyPostsModule from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return(
        <div className={MyPostsModule.My_posts}>
            <h2 className={MyPostsModule.myPostTitle}>My posts</h2>
            <div className={MyPostsModule.addPosts}>
                <input type="text" placeholder='New post' className={MyPostsModule.postInput}/>
                <button className={MyPostsModule.postButton}>Add post</button>
            </div>
            <div className={MyPostsModule.posts}>
                <Post message='hi, how are you?' likeCounter='46' />
                <Post message="It's my first post" likeCounter='4' />
            </div>
        </div>
    );
}

export default MyPosts;