import Dialogue from './Dialogue/Dialogue';

function Dialogues(props) {
  let messages = props.messages.map(m =>
    <Dialogue dialogue={m} chatId={m.id} activeMessage={m.activeMessage} newMesTrigger={props.newMesTrigger} sendMessage={props.sendMessage} />);

  return (
    <div>
      {messages}
    </div>
  );
}

export default Dialogues;
