import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    
    return(
        <div>
            <ProfileInfo/>
            <MyPosts 
                posts={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText} 
                addPost={props.addPost} 
                updatePostText={props.updatePostText} />
        </div>
      
    
    );
}

export default Profile;