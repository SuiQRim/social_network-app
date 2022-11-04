import mesStyle from './Message.module.css'

function Message(props) {
  return (
    <div className={mesStyle.message}>   
        {props.message}
    </div>
  );
}

export default Message;
