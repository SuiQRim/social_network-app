import { NavLink } from 'react-router-dom';
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
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small} />
                </NavLink>
            </div>
            <div className={style.mainInfo}>
                <div className={style.name}>{user.name}</div>
            </div>

            {
            user.followed 
            ?<button className={style.deleteFriend} onClick={deleteFriend}>Удалить из друзей</button> 
            :<button className={style.addFriend} onClick={addFriend}>Добавить в друзья</button>
            }
            
        </div>
    );
}

export default User;
