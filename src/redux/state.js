 let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: "It's my first post.", likesCount: 15},
                {id: 3, message: "Yo.", likesCount: 15},
                {id: 4, message: "Yo.", likesCount: 15}

            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: 'How are you, my brothers and sisters?'
        }

    },

     getState() {

        return (
            this._state
        );
     },
    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);

    },

    addMessage () {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);

    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    }


}

export default store;
window.store = store;
