import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

function Messages(props) {

  let messages = props.messages.map(m => <Message message={m.text} />);

  return (
    <div>
      <div>
        {messages}
      </div>
      <div>
        <MessageInput chatId={props.chatId} activeMessage={props.activeMessage}
          newMesTrigger={props.newMesTrigger} sendMessage={props.sendMessage} />
      </div>

    </div>
  );
}

export default Messages;
