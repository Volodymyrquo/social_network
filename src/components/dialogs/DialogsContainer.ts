import {addMessageActionCreator} from '../../redux/dialogs-reducer';
import { Dispatch } from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from "../../redux/redux-store";



let mapStateToProps = (state:AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }

    }
}


 export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect
 )(Dialogs);