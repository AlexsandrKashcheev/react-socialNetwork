import React from 'react';
import MyPostsModule from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let newChengeText = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    let postsElements = props.posts
        .map( p => <Post message={p.message} likeCounter={p.likesCount} />);

    return(
        <div className={MyPostsModule.MyPosts}>
            <h2 className={MyPostsModule.myPostTitle}>My posts</h2>
            <div className={MyPostsModule.addPosts}>
                <textarea onBlur={newChengeText} ref={newPostElement} defaultValue={props.newPostText} className={MyPostsModule.postInput}/>
                <button className={MyPostsModule.postButton} onClick={addPost}>Add post</button>
            </div>
            <div className={MyPostsModule.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;