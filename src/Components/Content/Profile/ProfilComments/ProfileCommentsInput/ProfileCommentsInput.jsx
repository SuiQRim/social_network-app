import React from 'react';
import s from './ProfileCommentsInput.module.css'
import { Formik } from 'formik';
import * as yup from 'yup'

function ProfileCommentsInput(props) {

  const validationsScheme = yup.object().shape({
    text: yup.string()
      .typeError('Должна быть строка')
      .max(100, 'Слишком длинный текст (макс 100 симв.)')
  })

  return (
    <div className={s.content}>

      <Formik
        initialValues={{ text: '' }}
        validationSchema={validationsScheme}
        onSubmit={props.addCom}>

        {({ values, errors, touched, handleChange,
          handleBlur, isValid, handleSubmit, dirty }) => (
          <div>
            <p className={s.title}>Left a comment</p>

            <textarea
              name='text'
              onChange={handleChange}
              value={values.text}
              className={!errors.text ? s.input : s.errorInput} />

            {errors.text && <div className={s.error}>{errors.text}</div>}

            <button type='submit' className={s.sendButton} onClick={handleSubmit}>Отправить</button>


          </div>
        )}
      </Formik>


    </div>
  );
}

export default ProfileCommentsInput;
