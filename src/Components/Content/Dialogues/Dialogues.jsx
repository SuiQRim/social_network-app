import Dialogue from './Dialogue/Dialogue';

function Dialogues(props) {
  let messages = props.messages.map(m =>
    <Dialogue key={m.id}
              dialogue={m} 
              chatId={m.id}
              sendMessage={props.sendMessage} />);

  return (
    <div>
      {messages}
    </div>
  );
}

export default Dialogues;
