import axios from 'axios';
import React from 'react';
import Nav from './Nav/Nav';
import User from './User/User';
import style from './Users.module.css'

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    getUsers = (itemsInPage, selectedPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${itemsInPage}&page=${selectedPage}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUserCount(responce.data.totalCount);
        })
    }

    onPageChanged = (n) => {
        this.props.setPage(n);
        this.getUsers(this.props.itemsInPageCount, n);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.getUsers(this.props.itemsInPageCount, this.props.selectedPage);
            console.log(this.props.selectedPage);
        }
    }

    render() {
        let pages = [];

        for (let i = 1; i <= this.props.pagesCount && i <= 20; i++) {
            pages.push(
                <Nav onSelectChange={this.onPageChanged} number={i} isSelected={i == this.props.selectedPage}/>
            );
        }


        let users = this.props.users.map(u => <User key={u.id} user={u} addFriend={this.props.addFriend} deleteFriend={this.props.deleteFriend} />);

        return (
            <div>
                <div>{pages}</div>
                {users}
            </div>
        );
    }
}


export default Users;
