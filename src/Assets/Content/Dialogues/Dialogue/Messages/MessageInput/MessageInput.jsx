import React from 'react';
import mesStyle from './MessageInput.module.css'

function MessageInput(props) {

  let sendMessage = () => props.sendMessage(props.chatId);

  let newMesChange = () => props.newMesTrigger(props.chatId, mesText.current.value)

  let mesText = React.createRef();
  return (
    <div className={mesStyle.element}>   

        <textarea ref={mesText} onChange={newMesChange} className={mesStyle.input} value={props.activeMessage}></textarea>

        <div className={mesStyle.sendButton}>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    </div>
  );
}

export default MessageInput;
