import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';
import mesStyle from './Messages.module.css'

function Messages(props) {

    let messages = props.messages.map(m => <Message message={m.text}/>);

  return (
    <div>   
        <div>
            {messages}
        </div>
        <div>
            <MessageInput chatId={props.chatId} dispatch={props.dispatch}/>
        </div>

    </div>
  );
}

export default Messages;
