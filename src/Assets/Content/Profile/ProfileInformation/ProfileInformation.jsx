import profInfoStyle from './ProfileInformation.module.css'

function ProfileInfo(props) { 
  if(!props.profInfo){
    return(<div></div>)
  }

  return (
    <div className={profInfoStyle.body}>

      <div className={profInfoStyle.avatar}>
        <img src={props.profInfo.photos.large} />
      </div>

      <div className={profInfoStyle.name}>
         <a >{props.profInfo.fullName}</a>
      </div>
     

    </div>
  );
}

export default ProfileInfo;
