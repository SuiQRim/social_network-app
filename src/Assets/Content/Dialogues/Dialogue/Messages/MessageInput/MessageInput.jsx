import React from 'react';
import { getSendMessageAT } from '../../../../../../redux/state';
import mesStyle from './MessageInput.module.css'

function MessageInput(props) {

  let sendMessage = () => {
    let action = getSendMessageAT(props.chatId, mesText.current.value);
    props.dispatch(action);
    mesText.current.value = "";
  }

  let mesText = React.createRef();
  return (
    <div className={mesStyle.element}>   

        <textarea ref={mesText} className={mesStyle.input}></textarea>

        <div className={mesStyle.sendButton}>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    </div>
  );
}

export default MessageInput;
