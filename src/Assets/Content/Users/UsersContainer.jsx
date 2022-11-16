import { connect } from 'react-redux';
import { addFriendAT, deleteFriendAT, setUsersAT,setTotalUserCountAC, setPageAC } from '../../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users : state.users.items,
        selectedPage : state.users.selectedCount,
        pagesCount : state.users.pagesCount,
        itemsInPageCount : state.users.itemsInPageCount,
        diapasone : state.users.diapasone,
        diapasoneStart : state.users.diapasoneStart
    }

}

const mapDispatchToProps = (dispatch) => { 
    return {
        addFriend : (id) => dispatch(addFriendAT(id)),
        deleteFriend : (id) => dispatch(deleteFriendAT(id)),
        setUsers : (users) => dispatch(setUsersAT(users)),
        setTotalUserCount : (totalCount) => dispatch(setTotalUserCountAC(totalCount)),
        setPage : (pageNumber) => dispatch(setPageAC(pageNumber)),
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
