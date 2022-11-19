import React from 'react';
import s from './ProfileInformation.module.css'

class ProfileInfo extends React.Component {

  state = {
    isStatusEdit: false,
    status: ""
  }

  switchStatusEditor = (value) => {
    this.setState(
      {
        isStatusEdit: value,
        status: this.props.status
      })

  }

  statusRef = React.createRef();

  statusTrigger = () =>
    this.setState({ status: this.statusRef.current.value })


  editStatus = () => {
    this.props.editStatus(this.state.status);
    this.switchStatusEditor(false);
  }

  
  cancelStatus = () => {
    this.switchStatusEditor(false);
  }

  auto_grow = () => {
    let element = this.statusRef.current;
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
  }

  render() {
    const statusMaxLenght = 300;
    const { props, } = this;

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

              <div className={s.statusPanel}>

                <textarea className={s.statusInput} ref={this.statusRef} value={this.state.status ?? ''}
                  onChange={this.statusTrigger} maxLength={statusMaxLenght} onInput={this.auto_grow} />

                <button className={s.statusButton} onClick={this.editStatus}>✔</button>
                <button className={s.statusButton} onClick={this.cancelStatus}>✖</button>

              </div>
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
