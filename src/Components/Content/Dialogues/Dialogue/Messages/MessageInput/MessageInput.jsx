import React from 'react';
import s from './MessageInput.module.css'
import { Formik } from 'formik';
import * as yup from 'yup'

function MessageInput(props) {
  
  let sendMessage = (values) => {
    props.sendMessage(props.chatId, values.message);
  }


  let mesText = React.createRef();

  let auto_grow = () => {
    let element = mesText.current;
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
  }

  const validationSchema = yup.object().shape({
    message: yup
      .string('Неправильный формат')
      .max(400, 'Слишком длинное сообщение (макс 400 симв.)')
      .required('Объязательное поле')
  })

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, {resetForm}) => {
        sendMessage(values);
        resetForm();
      }}
      validationSchema={validationSchema}>

      {({ values, isValid, handleChange, handleSubmit, dirty}) => (

        <div className={s.element}>

          <textarea
            ref={mesText}
            onChange={handleChange}
            className={s.input}
            name='message'
            onInput={auto_grow}
            value={values.message} />

          <div className={s.sendButton}>
            <button type='submit' disabled={!(isValid && dirty)} onClick={handleSubmit}>Отправить</button>
          </div>
        </div>
      )}

    </Formik>
  );
}

export default MessageInput;
