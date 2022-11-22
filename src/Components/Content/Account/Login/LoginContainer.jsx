import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../../../redux/auth-reducer';
import Login from './Login';

class LoginContainer extends Component {

    login = (values) => {
        this.props.login(values.email, values.password, values.rememberMe);
    }

    render() {
        if(this.props.isLogin) return <Navigate to='/profile'/>
        return (
            <Login login={this.login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin : state.auth.isLogin
    }
}
const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
