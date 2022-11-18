import mesStyle from './Dialogue.module.css'
import Messages from './Messages/Messages';

function Dialogue(props) {
  return (
    <div className={mesStyle.wrapper}>

      <div className={mesStyle.icon}>
        <img alt='аватар' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s' />
      </div>

      <div className={mesStyle.header}>
        <div className={mesStyle.headerInfo}>
          <div className={mesStyle.name}><p>{props.dialogue.name}</p></div>
        </div>
      </div>

      <div className={mesStyle.messages}>
        <Messages chatId={props.chatId} messages={props.dialogue.messages}
          activeMessage={props.activeMessage} newMesTrigger={props.newMesTrigger} sendMessage={props.sendMessage} />
      </div>

    </div>
  );
}

export default Dialogue;
