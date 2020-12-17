import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
let mapPropsToState = (state) => ({
       isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {debugger
class RedirectComponent extends React.Component {
    render() {
        if(!this.props.isAuth)  return <Redirect to={"/login"}/>;
        return <Component {...this.props}/>
    }

}
return connect(mapPropsToState)(RedirectComponent);
}

export default withAuthRedirect;