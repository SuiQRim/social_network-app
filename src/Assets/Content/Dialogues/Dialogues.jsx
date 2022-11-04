import mesStyle from './Dialogues.module.css'
import Dialogue from './Dialogue/Dialogue';

function Dialogues(props) {

    let messages = props.messages.map(m => <Dialogue dialogue={m} chatId={m.id} dispatch={props.dispatch}/>);

  return (
    <div>   
        {messages}
    </div>
  );
}

export default Dialogues;
