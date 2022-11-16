import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { addFriendAT, deleteFriendAT, setUsersAT,setTotalUserCountAC, setPageAC } from '../../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.getUsers(this.props.itemsInPageCount, this.props.selectedPage);
        }
    }
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
    render(){
        return <Users users={this.props.users} onPageChanged={this.onPageChanged} selectedPage={this.props.selectedPage} pagesCount={this.props.pagesCount}
            diapasoneStart={this.props.diapasoneStart} diapasone={this.props.diapasone} addFriend={this.props.addFriend} deleteFriend={this.props.deleteFriend}/>;
    };
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


