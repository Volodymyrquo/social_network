import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}

                    />

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);

serviceWorker.unregister();
