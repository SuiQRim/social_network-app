import React from 'react';
import s from './ProfileInformation.module.css'

class ProfileInfo extends React.Component {

  state = {
    isStatusEdit: false,
    aboutMe: ""
  }

  editStatus = (value) => {
    this.setState(
      {
        isStatusEdit: value,
        aboutMe : value ? this.props.profInfo.aboutMe : this.state.aboutMe 
      })

  }


  render() {

    let aboutMeRef = React.createRef();
    let onAboutMeChanghed = () => {
      if(this.state.isStatusEdit)
        this.setState({
          aboutMe: aboutMeRef.current.value
        })
    }

    const { props, } = this;

    if (!props.profInfo) {
      return (<div></div>)
    }

    return (
      <div className={s.body}>

        <div className={s.avatar}>
          <img alt='аватар' src={props.profInfo.photos.large ? props.profInfo.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s'} />
        </div>

        <div className={s.mainInfo}>

          <div className={s.name}>
            {props.profInfo.fullName}
          </div>

          <div className={s.about}>

            <div onDoubleClick={() => this.editStatus(true)}>{props.profInfo.aboutMe} ЫЫЫЫЫЫ</div>

            {this.state.isStatusEdit && this.props.isMyAccount &&

              <div className={s.aboutPanel}>

                <textarea className={s.aboutInput} ref={aboutMeRef} value={this.state.aboutMe} 
                          onChange={onAboutMeChanghed} onBlur={() => this.editStatus(false)}/>

                <button className={s.saveAbout}>Сохранить</button>
              </div>
            }
          </div>

        </div>


      </div>
    );
  }
}

export default ProfileInfo;
