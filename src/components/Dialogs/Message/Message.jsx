import React from "react";
import dialogsModule from './../Dialogs.module.css';

const Message = (props) => {
    return(
        <div className={dialogsModule.message}>{props.message}</div>
    );
}

export default Message;