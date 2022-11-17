import { NavLink } from 'react-router-dom';
import { follow, unFollow } from '../../../../api/api';
import style from './User.module.css'

function User(props) {

    let user = props.user;

    let addFriend = () => {

        props.setFollowingProgressStataus(true);
        follow(user.id).then(data => {

            if (data.resultCode === 0)
                props.addFriend(user.id);

            props.setFollowingProgressStataus(false);
        });

    }

    let deleteFriend = () => {
        props.setFollowingProgressStataus(true);
       unFollow(user.id).then(data => {

            if (data.resultCode === 0)
                props.deleteFriend(user.id);

            props.setFollowingProgressStataus(false);
        });
    }

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
                    ? <button disabled={props.isFollowingInProgress} className={style.deleteFriend} onClick={deleteFriend}>Удалить из друзей</button>
                    : <button disabled={props.isFollowingInProgress} className={style.addFriend} onClick={addFriend}>Добавить в друзья</button>
            }

        </div>
    );
}

export default User;
