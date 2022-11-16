import axios from 'axios';
import React from 'react';
import TabNavigator from './TabNavigator/TabNavigator';
import User from './User/User';
import style from './Users.module.css'

class Users extends React.Component {

    getUsers = (itemsInPage, selectedPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${itemsInPage}&page=${selectedPage}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUserCount(responce.data.totalCount);
        })
    }

    onPageChanged = (n) => {
        this.props.setPage(n);
        if(n < 1 ^ n > this.props.pagesCount) return;
        this.getUsers(this.props.itemsInPageCount, n);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.getUsers(this.props.itemsInPageCount, this.props.selectedPage);
            console.log(this.props.selectedPage);
        }
    }

    render() {
        let users = this.props.users.map(u => <User key={u.id} user={u} addFriend={this.props.addFriend} deleteFriend={this.props.deleteFriend} />);
        return (
            <div>
                <div className={style.tabNav}>
                    <TabNavigator
                        onPageChanged={this.onPageChanged} selectedPage={this.props.selectedPage} pagesCount={this.props.pagesCount}
                        diapasoneStart={this.props.diapasoneStart} diapasone={this.props.diapasone} />
                </div>
                <div>
                    {users}
                </div>

            </div>
        );
    }
}


export default Users;
