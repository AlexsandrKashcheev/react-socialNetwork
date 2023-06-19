import React from "react";
import ProfInfoModule from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return(
        <div className={ProfInfoModule.ProfileInfo}>
            <img className={ProfInfoModule.profileImg} src="https://img.fonwall.ru/o/50/voda_reka_vodopad_kustyi_trava.jpg?route=mid&amp;h=750"/>
            <div className={ProfInfoModule.userInfo}>
                ava + decription
            </div>
        </div>
    );
}

export default ProfileInfo;