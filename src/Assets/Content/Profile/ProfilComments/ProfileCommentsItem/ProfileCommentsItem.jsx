import comStyle from './ProfileCommentsItem.module.css';

function ProfileCommentsItem(props) {
  return (
    <div className={comStyle.item}>

      <div className={comStyle.senderIcon}>
        <img alt='аватар' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s' />
      </div>
      
      <div className={comStyle.senderName}>
        <p>{props.name}</p>
      </div>

      <p className={comStyle.content}>
        {props.text}
      </p>

    </div>
  );
}

export default ProfileCommentsItem;
