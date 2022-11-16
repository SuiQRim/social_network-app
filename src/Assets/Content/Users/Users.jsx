import axios from 'axios';
import React from 'react';
import Nav from './Nav/Nav';
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


        pages.push(<Nav onSelectChange={this.onPageChanged} number={1} isSelected={1 === this.props.selectedPage}/>);
        pages.push(<button onClick={() => this.onPageChanged(this.props.selectedPage - 1)}>◄</button>);

        for (let i = this.props.diapasoneStart; i <= this.props.diapasoneStart + this.props.diapasone - 1; i++) {
            pages.push(
                <Nav key={i} onSelectChange={this.onPageChanged} number={i} isSelected={i === this.props.selectedPage}/>
            );
        }  
        pages.push(<button onClick={() => this.onPageChanged(this.props.selectedPage + 1)}>►</button>);
        pages.push(<Nav onSelectChange={this.onPageChanged} number={this.props.pagesCount} isSelected={this.props.pagesCount === this.props.selectedPage}/>);

        
        let users = this.props.users.map(u => <User key={u.id} user={u} addFriend={this.props.addFriend} deleteFriend={this.props.deleteFriend} />);

        return (
            <div>
                
                <div className={style.pages}>{pages}</div>
                {users}
            </div>
        );
    }
}


export default Users;
