const ADD_MESSAGE = 'ADD-MESSAGE';

export type DialogType = {id:number; name:string}
export type MessageType = {id:number; message:string}
export type InitialStateType = typeof initialState;

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>,
    newMessageBody: '' 
}

const dialogsReducer = (state = initialState, action:any):InitialStateType => {



    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],

            };

        default:
            return state;
    }

}
type AddMessageActionCreatorType = {type: typeof ADD_MESSAGE; newMessageBody:string};
export const addMessageActionCreator = (newMessageBody:string):AddMessageActionCreatorType => ({type: ADD_MESSAGE,newMessageBody});

export default dialogsReducer;