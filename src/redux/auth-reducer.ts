import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

type InitialStateType = typeof initialState;

let initialState = {
    userId: null as null|number,
    email: null as null|string,
    login: null as null|string,
    isAuth: false
};


const authReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload

            }
        default:
            return state;
    }

}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA;
    payload: InitialStateType
};

export const setAuthUserData = (userId:number, email:string, login:string, isAuth:boolean):SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch:any) => {
    let response = await authApi.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }


}
export const login = (email:string, password:string, rememberMe:boolean) => async (dispatch:any) => {


    let response = await authApi.login(email, password, rememberMe);

            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.messages.length > 0 ? response.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        }

export const logout = () => async (dispatch:any) => {
   let response = await authApi.logout();
                  if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }

export default authReducer;