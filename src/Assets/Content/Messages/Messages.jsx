import mesStyle from './Messages.module.css'
import MessagesItem from './MessagesItem/MessagesItem';

function Messages(props) {

    let messages = props.messages.map(m => <MessagesItem message={m}/>);

  return (
    <div>   
        {messages}
    </div>
  );
}

export default Messages;
