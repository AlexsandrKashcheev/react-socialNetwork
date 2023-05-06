import React from "react";
import ProfModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return(
        <div>
            <img className={ProfModule.profileImg} src="https://img.fonwall.ru/o/50/voda_reka_vodopad_kustyi_trava.jpg?route=mid&amp;h=750"/>
            <div className={ProfModule.user_info}>
                ava + decription
            </div>
            <MyPosts />
        </div>
      
    
    );
}

export default Profile;