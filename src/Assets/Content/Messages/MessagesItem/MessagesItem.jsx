import mesStyle from './MessagesItem.module.css'

function MessagesItem(props) {
  return (
    <div className={mesStyle.wrapper}>

      <div className={mesStyle.icon}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s' />
      </div>

      <div className={mesStyle.header}>
        <div className={mesStyle.headerInfo}> 
          <div className={mesStyle.name}><a>{props.message.name}</a></div>
          <div className={mesStyle.lastMessage}><a>{props.message.lastMessage}</a></div>
        </div>
      </div>

    </div>
  );
}

export default MessagesItem;
