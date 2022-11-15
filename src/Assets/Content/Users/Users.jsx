import axios from 'axios';
import React from 'react';
import User from './User/User';
import style from './Users.module.css'

class Users extends React.Component {

    constructor (props) {

        super(props);

        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
                props.setUsers(responce.data.items);
            })
        }
    }

    render() {

        let users = this.props.users.map(u => <User key={u.id} user={u} addFriend={this.props.addFriend} deleteFriend={this.props.deleteFriend} />);

        return (
            <div>
                {users}
            </div>
        );
    }
}


export default Users;
