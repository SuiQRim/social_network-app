import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../../redux/auth-reducer';
import Login from './Login';

class LoginContainer extends Component {

    login = (values) => {
        this.props.login(values.email, values.password, values.rememberMe);
    }

    render() {
        return (
            <Login login={this.login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
