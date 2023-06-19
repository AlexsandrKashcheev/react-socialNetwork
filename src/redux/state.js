export let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Alexander"},
                {id: 2, name: "Alina"},
                {id: 3, name: "Vasya"},
                {id: 4, name: "Pidoras"},
              ],
            messagesData: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yes'},
              ],
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 7},
                {id: 3, message: 'yo', likesCount: 43},
                {id: 4, message: 'yes', likesCount: 9},
            ],
            newPostText: ""
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state chenged');
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            
        }else if(action.type === 'UPDATE-POST-TEXT'){
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        }
    }

}


window.store = store;

export default store;