import React from 'react';
import pciStyle from './ProfileCommentsInput.module.css'

function ProfileCommentsInput(props) {

  let newCommentText = React.createRef();

  let newComChahge = () => 
  {
    props.newComTrigger(newCommentText.current.value);
  }

  let addNewCom = () => {

    props.addCom();
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
