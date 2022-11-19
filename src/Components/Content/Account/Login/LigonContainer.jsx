import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../../redux/auth-reducer';
import * as yup from 'yup'
import Login from './Login';

class LoginContainer extends Component {

    login = (values) => {
        this.props.login(values.email, values.password, values.rememberMe);
    }

    render() {
        const validationsScheme = yup.object().shape({
            email: yup.string().typeError('Должна быть строка').required('Объязательное поле'),
            password: yup.string().typeError('Должна быть строка').required('Объязательное поле'),
            rememberMe: yup.bool().typeError('Какое-то мясо'),
        })
        return (
            <Login validationsScheme={validationsScheme} login={this.login}/>
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
