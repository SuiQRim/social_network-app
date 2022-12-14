import React from 'react';
import { connect } from 'react-redux';
import { addComment, getProfile, editStatus, getStatus } from '../../../redux/profile-reducer';
import Profile from './Profile';
import withRedirectToLogin from '../../../hoc/withRedirectToLogin';
import withRouter from '../../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    isMyAccount = false;
    profileId = null

    addCom = (values) => {
        this.props.addCom(values.text);
    }
    constructor(props) {
        
        super(props);
        this.profileId = props.router.params.userId;

        if (!this.profileId) {
            this.profileId = props.userId
            this.isMyAccount = true;
        };

    }

    componentDidMount() {
        this.props.getProfile(this.profileId);
        this.props.getStatus(this.profileId);
    }

    render() {
        return <Profile {...this.props} addCom={this.addCom} isMyAccount={this.isMyAccount} />;
    }
}


const mapStateToProps = (state) => {
    return {
        profInfo: state.profile.information,
        status: state.profile.status,
        comments: state.profile.comments,
        userId: state.auth.userId,
        isLogin: state.auth.isLogin,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addCom: (text) => dispatch(addComment(text)),
        getProfile: (userId) => dispatch(getProfile(userId)),
        editStatus: (status) => dispatch(editStatus(status)),
        getStatus: (id) => dispatch(getStatus(id))
    }
}

export default compose(
    withRedirectToLogin,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
    (ProfileContainer);
