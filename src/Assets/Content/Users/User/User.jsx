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
                    <img  alt='аватар' src={user.photos.small ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s'} />
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
