import { connect } from "react-redux";
import Header from "./Header";
import {setUserData} from  "../../redux/auth-reducer"
import React from "react";
import axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', {withCredentials : true}).then(responce => { 
            if(responce.data.resultCode === 0) {
                let user = responce.data.data;
                this.props.setUserData(user.id, user.email, user.login)
            }
        })
    }
    render(){return <Header name={this.props.login}/>}
}

let mapStateToProps = (state) => ({
    login : state.auth.login,
})

let mapDispatchToProps = {
    setUserData
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);