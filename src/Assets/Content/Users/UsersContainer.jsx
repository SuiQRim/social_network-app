import React from 'react';
import { connect } from 'react-redux';
import { setPage, setFollowingProgressStataus, getUsers, follow, unFollow } from '../../../redux/users-reducer';
import Users from './Users';
import loadGif from '../../../Prefabs/Images/load.gif';
import { Navigate } from 'react-router-dom';

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
        let p = this.props;

        return (
            this.props.isLogin ?
                <div>
                    {p.isFetching ? <img alt="Загрузка" style={{ width: '100px', heigth: '100px', position: 'absolute' }} src={loadGif} /> : null}
                    <Users users={p.users} onPageChanged={this.onPageChanged} selectedPage={p.selectedPage} pagesCount={p.pagesCount}
                        diapasoneStart={p.diapasoneStart} diapasone={p.diapasone} follow={p.follow} unFollow={p.unFollow}
                        setFollowingProgressStataus={p.setFollowingProgressStataus} isFollowingInProgress={p.isFollowingInProgress} />
                </div>
                :
                <Navigate to='/login' />)

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
        isFollowingInProgress: users.isFollowingInProgress,
        isLogin : state.auth.isLogin
    }

}

const mapDispatchToProps = {
    setPage,
    setFollowingProgressStataus,
    getUsers,
    follow,
    unFollow
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


