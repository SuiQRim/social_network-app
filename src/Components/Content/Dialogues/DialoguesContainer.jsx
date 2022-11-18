import Dialogues from './Dialogues';
import { getNewMesTriggerAT, getSendMessageAT } from '../../../redux/messages-reducer';
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
        newMesTrigger: (charId, text) =>  dispatch(getNewMesTriggerAT(charId, text)),
        sendMessage : (chatId) => dispatch(getSendMessageAT(chatId))
    }
}
let AuthorCoponent = withRedirectToLogin(DialoguesContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AuthorCoponent);
