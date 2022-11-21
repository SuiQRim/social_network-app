import React from 'react';
import s from './ProfileInformation.module.css'
import { Formik } from 'formik';
import * as yup from 'yup'

class ProfileInfo extends React.Component {

  state = {
    status: false,
  }

  switchStatusEditor = (value) => {
    this.setState(
      {
        isStatusEdit: value,
      })
  }

 
  editStatus = (values) => {
    this.props.editStatus(values.status);
    this.switchStatusEditor(false);
  }

  cancelStatus = () => this.switchStatusEditor(false);
  
  statusRef = React.createRef();
  auto_grow = () => {
    let element = this.statusRef.current;
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
  }

  render() {

    const validationsScheme = yup.object().shape({
      status: yup.string()
        .typeError('Должна быть строка')
        .max(300, 'Слишком длинный текст (макс 300 симв.)')
    })

    const {props} = this;

    if (!props.profInfo) return (<div></div>)

    return (

      <div className={s.body}>

        <div className={s.avatar}>
          <img alt='аватар' src={props.profInfo.photos.large ? props.profInfo.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s'} />
        </div>

        <div className={s.mainInfo}>

          <div className={s.name}>
            {props.profInfo.fullName}
          </div>

          <div className={s.statusInfo}>

            <div className={s.status} onDoubleClick={() => this.switchStatusEditor(true)}>{props.status}</div>

            {this.state.isStatusEdit && this.props.isMyAccount &&

              <Formik
                initialValues={{ status: props.status}}
                onSubmit={this.editStatus}
                validationSchema={validationsScheme}>

                {({ values, errors, touched, handleChange,
                  handleBlur, isValid, handleSubmit, dirty }) => (
                    
                  <div className={errors.status ? s.statusPanelError : s.statusPanel}>

                    <textarea
                      ref={this.statusRef}
                      onChange={handleChange}
                      name='status'
                      className={s.statusInput}
                      value={values.status}
                      onInput={this.auto_grow}/>
                  

                    {errors.status && <div style={{color : 'red',margin : '10px 0px'}}>{errors.status}</div>}
                    <button className={s.statusButton} type='sumbit' onClick={handleSubmit} disabled={!isValid}>✔</button>
                    
                    <button className={s.statusButton} onClick={this.cancelStatus}>✖</button>

                  </div>
                )}
              </Formik>
            }
          </div>

          <div className={s.aboutInfo}>

            <div className={s.about}>
              {props.profInfo.aboutMe}
            </div>
          </div>


        </div>


      </div>
    );
  }
}

export default ProfileInfo;
