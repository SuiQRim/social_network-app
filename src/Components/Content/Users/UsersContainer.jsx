import React from 'react';
import { connect } from 'react-redux';
import { setPage, setFollowingProgressStataus, getUsers, follow, unFollow } from '../../../redux/users-reducer';
import Users from './Users';
import withRedirectToLogin from '../../../hoc/withRedirectToLogin';
import { compose } from 'redux';
import Preloader from '../../../Prefabs/Preloader';

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

                <div>
                    {p.isFetching ? <Preloader/> : null}
                    <Users users={p.users} onPageChanged={this.onPageChanged} selectedPage={p.selectedPage} pagesCount={p.pagesCount}
                        diapasoneStart={p.diapasoneStart} diapasone={p.diapasone} follow={p.follow} unFollow={p.unFollow}
                        setFollowingProgressStataus={p.setFollowingProgressStataus} isFollowingInProgress={p.isFollowingInProgress} />
                </div>)

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
    }

}

const mapDispatchToProps = {
    setPage,
    setFollowingProgressStataus,
    getUsers,
    follow,
    unFollow
}

let AuthorCoponent = withRedirectToLogin(UsersContainer);

export default compose(
    withRedirectToLogin, 
    connect(mapStateToProps, mapDispatchToProps))
    (AuthorCoponent);


