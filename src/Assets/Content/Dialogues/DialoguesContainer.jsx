import mesStyle from './Dialogues.module.css'
import Dialogues from './Dialogues';
import { getNewMesTriggerAT, getSendMessageAT } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        messages: state.messenger
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        newMesTrigger: (charId, text) =>  dispatch(getNewMesTriggerAT(charId, text)),
        sendMessage : (chatId) => dispatch(getSendMessageAT(chatId))
    }
}

let DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;
