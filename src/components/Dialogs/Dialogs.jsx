import React from "react";
import dialogsModule from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messageElement = React.createRef();

    let sendMessage = () => {
        let text = messageElement.current.value;
        alert(text);
    }
    
    let dialogsElements = props.state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData
        .map( message => <Message message={message.message}/>);

    return (
        <div className={dialogsModule.wrapper}>
            <div className={dialogsModule.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={dialogsModule.messages}>
                { messagesElements }
                <div>
                    <textarea ref={messageElement} className={dialogsModule.inputMessage}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;