import Dialogues from './Dialogues';
import { getSendMessageAT } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';
import React from 'react';
import withRedirectToLogin from '../../../hoc/withRedirectToLogin';


class DialoguesContainer extends React.Component {

    render(){
        return <Dialogues {...this.props}/>;  
    }
}


const mapStateToProps = (state) =>{
    return {
        messages: state.messenger,
        isLogin : state.auth.isLogin
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage : (chatId, message) => dispatch(getSendMessageAT(chatId, message))
    }
}
let AuthorCoponent = withRedirectToLogin(DialoguesContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AuthorCoponent);
