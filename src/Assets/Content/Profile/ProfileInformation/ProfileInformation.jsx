import profInfoStyle from './ProfileInformation.module.css'

function ProfileInfo(props) {
  return (
    <div className={profInfoStyle.body}>

      <div className={profInfoStyle.avatar}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s' />
      </div>

      <div className={profInfoStyle.name}>
         <a >{props.name}</a>
      </div>
     

    </div>
  );
}

export default ProfileInfo;
