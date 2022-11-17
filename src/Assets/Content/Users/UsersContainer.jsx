import React from 'react';
import { connect } from 'react-redux';
import { addFriend, deleteFriend, setUsers, setTotalUserCount, setPage, setFollowingProgressStataus, getUsers, follow, unFollow} from '../../../redux/users-reducer';
import Users from './Users';
import loadGif from '../../../Prefabs/Images/load.gif';

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.itemsInPageCount, this.props.selectedPage);
        }
    }

    onPageChanged = (n) => {
        this.props.setPage(n);
        if (n < 1 ^ n > this.props.pagesCount) return;
        this.props.getUsers(this.props.itemsInPageCount, n);
    }
    render() {
        return <>
            {this.props.isFetching ? <img alt="Аватар" style={{width : '100px', heigth : '100px', position : 'absolute'}} src={loadGif}/> : null}
            <Users users={this.props.users} onPageChanged={this.onPageChanged} selectedPage={this.props.selectedPage} pagesCount={this.props.pagesCount}
                diapasoneStart={this.props.diapasoneStart} diapasone={this.props.diapasone} follow={this.props.follow} unFollow={this.props.unFollow}
                setFollowingProgressStataus={this.props.setFollowingProgressStataus} isFollowingInProgress={this.props.isFollowingInProgress}/>
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
        isFetching: users.isFetching,
        isFollowingInProgress : users.isFollowingInProgress
    }

}

const mapDispatchToProps = {
    addFriend,
    deleteFriend,
    setUsers,
    setTotalUserCount,
    setPage,
    setFollowingProgressStataus,
    getUsers,
    follow,
    unFollow
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


