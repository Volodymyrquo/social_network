import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const  DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));
const  ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));



class App extends Component {
    componentDidMount() {debugger
        this.props.initializeApp();
    }

    render() {debugger
if(!this.props.initialized) {
   return <Preloader/>
}

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer) }
                    />
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer) }
                    />
                    <Route path='/users'
                           render={
                               () => <UsersContainer/>
                           }
                    />
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const AppContainer = compose(withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
