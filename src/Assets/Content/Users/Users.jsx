import React from 'react';
import TabNavigator from './TabNavigator/TabNavigator';
import User from './User/User';
import style from './Users.module.css'

let Users = (props) => {

    let users = props.users.map(u => <User key={u.id} setFollowingProgressStataus={props.setFollowingProgressStataus} isFollowingInProgress={props.isFollowingInProgress} user={u} addFriend={props.addFriend} deleteFriend={props.deleteFriend} />);
    return (
        <div>
            <div className={style.tabNav}>
                <TabNavigator
                    onPageChanged={props.onPageChanged} selectedPage={props.selectedPage} pagesCount={props.pagesCount}
                    diapasoneStart={props.diapasoneStart} diapasone={props.diapasone} />
            </div>
            <div>
                {users}
            </div>

        </div>
    );

}


export default Users;
