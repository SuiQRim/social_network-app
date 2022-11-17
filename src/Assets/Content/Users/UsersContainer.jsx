import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { addFriend, deleteFriend, setUsers, setTotalUserCount, setPage, toggleFetching } from '../../../redux/users-reducer';
import Users from './Users';
import loadGif from '../../../Prefabs/Images/load.gif';

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.getUsers(this.props.itemsInPageCount, this.props.selectedPage);
            this.props.toggleFetching(false);
        }
    }
    getUsers = (itemsInPage, selectedPage) => {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${itemsInPage}&page=${selectedPage}`,
        {
            withCredentials : true
        }).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUserCount(responce.data.totalCount);
            this.props.toggleFetching(false);
        })
    }

    onPageChanged = (n) => {
        this.props.setPage(n);
        if (n < 1 ^ n > this.props.pagesCount) return;
        this.getUsers(this.props.itemsInPageCount, n);
    }
    render() {
        return <>
            {this.props.isFetching ? <img alt="Аватар" style={{width : '100px', heigth : '100px', position : 'absolute'}} src={loadGif}/> : null}
            <Users users={this.props.users} onPageChanged={this.onPageChanged} selectedPage={this.props.selectedPage} pagesCount={this.props.pagesCount}
                diapasoneStart={this.props.diapasoneStart} diapasone={this.props.diapasone} addFriend={this.props.addFriend} deleteFriend={this.props.deleteFriend} />
        </>;
    };
}


const mapStateToProps = (state) => {
    let users = state.users;
    return {
        users: users.items,
        selectedPage: users.selectedCount,
        pagesCount: users.pagesCount,
        itemsInPageCount: users.itemsInPageCount,
        diapasone: users.diapasone,
        diapasoneStart: users.diapasoneStart,
        isFetching: users.isFetching
    }

}

const mapDispatchToProps = {
    addFriend,
    deleteFriend,
    setUsers,
    setTotalUserCount,
    setPage,
    toggleFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


