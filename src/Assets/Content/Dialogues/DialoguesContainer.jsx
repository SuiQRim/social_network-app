import mesStyle from './Dialogues.module.css'
import Dialogue from './Dialogue/Dialogue';
import Dialogues from './Dialogues';
import { getSendMessageAT } from '../../../redux/messages-reducer';

function DialoguesContainer(props) {

    let sendMessage = (chatId, text) => props.dispatch(getSendMessageAT(chatId, text));


    return (
        <div>
            <Dialogues messages={props.messages} sendMessage={sendMessage}/>
        </div>
    );
}

export default DialoguesContainer;
