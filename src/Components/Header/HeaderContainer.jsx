import { connect } from "react-redux";
import Header from "./Header";
import {signIn} from  "../../redux/auth-reducer"
import React from "react";

class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.signIn();
    }
    render(){return <Header name={this.props.login}/>}
}

let mapStateToProps = (state) => ({
    login : state.auth.login,
})

let mapDispatchToProps = {
    signIn
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);