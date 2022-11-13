import style from './User.module.css'

function User(props) {

    let user = props.user;

    let addFriend = () => {
        props.addFriend(user.id);
    }

    let deleteFriend = () => {
        props.deleteFriend(user.id);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.icon}>
                <img src={user.icon} />
            </div>
            <div className={style.mainInfo}>
                <div className={style.name}>{user.name}</div>
            </div>

            <button onClick={user.isFriend ? deleteFriend : addFriend} className={user.isFriend ? style.deleteFriend : style.addFriend}>
                {user.isFriend ? "Удалить из друзей" : "Добавить в друзья"}
            </button>
        </div>
    );
}

export default User;
