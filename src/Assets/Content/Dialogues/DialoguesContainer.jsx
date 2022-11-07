import mesStyle from './Dialogues.module.css'
import Dialogue from './Dialogue/Dialogue';
import Dialogues from './Dialogues';
import { getNewMesTriggerAT, getSendMessageAT } from '../../../redux/messages-reducer';

function DialoguesContainer(props) {

    let sendMessage = (chatId) =>
        props.dispatch(getSendMessageAT(chatId));

    let newMesTrigger = (charId, text) =>
        props.dispatch(getNewMesTriggerAT(charId, text));

    return (
        <div>
            <Dialogues messages={props.messages} newMesTrigger={newMesTrigger} sendMessage={sendMessage} />
        </div>
    );
}

export default DialoguesContainer;
