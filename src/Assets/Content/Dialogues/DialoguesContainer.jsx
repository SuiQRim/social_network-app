import Dialogues from './Dialogues';
import { getNewMesTriggerAT, getSendMessageAT } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';


class DialoguesContainer extends React.Component {

    render(){
        return this.props.isLogin ?  <Dialogues {...this.props}/> : <Navigate to='/login'/>   
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

export default connect(mapStateToProps, mapDispatchToProps)(DialoguesContainer);
