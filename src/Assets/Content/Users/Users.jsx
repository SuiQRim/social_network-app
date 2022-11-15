import axios from 'axios';
import User from './User/User';
import style from './Users.module.css'

function Users(props) {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            props.setUsers(responce.data.items);
        })
    }

    let users = props.users.map(u => <User user={u} addFriend={props.addFriend} deleteFriend={props.deleteFriend} />);

    return (
        <div>
            {users}
        </div>
    );
}

export default Users;
