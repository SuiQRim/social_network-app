import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function withRedirectToLogin(Component) {

	let withRedirectToLog = (props) => {
		return props.isLogin ? <Component {...props} /> : <Navigate to='/login' />;
	}
	return connect(map)(withRedirectToLog);
	
}

const map = (state) => {
    return {
        isLogin : state.auth.isLogin
    }
}

export default withRedirectToLogin;