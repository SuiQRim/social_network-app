import { NavLink } from 'react-router-dom';
import style from './User.module.css'

function User(props) {

    let user = props.user;
    return (
        <div className={style.wrapper}>

            <div className={style.icon}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt='аватар' src={user.photos.small ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRhC_l2NylzcKzyuNT8H2PnInA0l93Rg7AVfSJqzKw&s'} />
                </NavLink>
            </div>
            <div className={style.mainInfo}>
                <div className={style.name}>{user.name}</div>
            </div>

            {
                user.followed
                    ? <button disabled={props.isFollowingInProgress.some(f => f === user.id)} className={style.deleteFriend}
                        onClick={() => props.unFollow(user.id)}>
                        Удалить из друзей
                    </button>

                    : <button disabled={props.isFollowingInProgress.some(f => f === user.id)}
                        className={style.addFriend} onClick={() => props.follow(user.id)}>
                        Добавить в друзья
                    </button>
            }

        </div>
    );
}

export default User;
