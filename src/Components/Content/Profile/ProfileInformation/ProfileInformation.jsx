import s from './ProfileInformation.module.css'

function ProfileInfo(props) {
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
          {props.profInfo.aboutMe}
        </div>
      </div>


    </div>
  );
}

export default ProfileInfo;
