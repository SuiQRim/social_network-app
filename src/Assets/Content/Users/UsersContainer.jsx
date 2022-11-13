import { connect } from 'react-redux';
import { addFriendAT, deleteFriendAT, setUsersAT } from '../../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users : state.users
    }

}

const mapDispatchToProps = (dispatch) => { 
    return {
        addFriend : (id) => dispatch(addFriendAT(id)),
        deleteFriend : (id) => dispatch(deleteFriendAT(id)),
        setUsers : (users) => dispatch(setUsersAT(users))
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
