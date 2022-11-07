import React from 'react';
import { getActiveComTriggerAT, getAddCommentAT} from '../../../../../redux/profile-comments-reducer';
import pciStyle from './ProfileCommentsInput.module.css'

function ProfileCommentsInput(props) {

  let newCommentText = React.createRef();

  let newComChahge = () => 
  {
    let a = newCommentText.current.value;
    let action = getActiveComTriggerAT(a);
    props.dispatch(action);
  }

  let addNewCom = () => {
    let action = getAddCommentAT();
    props.dispatch(action);
  }

  return (
    <div className={pciStyle.content}>

      <a className={pciStyle.title}>Left a comment</a>

      <textarea onChange={newComChahge} ref={newCommentText} value={props.activeCom} className={pciStyle.input} />

      <div className={pciStyle.sendButton}>
        <button onClick={addNewCom}>Отправить</button>
      </div>

    </div>
  );
}

export default ProfileCommentsInput;
