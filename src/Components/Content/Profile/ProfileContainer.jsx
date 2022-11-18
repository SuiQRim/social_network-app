import React from 'react';
import { connect } from 'react-redux';
import { getActiveComTriggerAT, getAddCommentAT, getProfile } from '../../../redux/profile-reducer';
import Profile from './Profile';
import withRedirectToLogin from '../../../hoc/withRedirectToLogin';
import withRouter from '../../../hoc/withRouter';

class ProfileContainer extends React.Component{
    componentDidMount(){
        
        let userId = this.props.router.params.userId;

        if(!userId) userId = this.props.userId;

        this.props.getProfile(userId);
    }

    render(){
        return <Profile {...this.props}/>;  
    }
}


const mapStateToProps = (state) => {
    return {
        profInfo : state.profile.information,
        comments : state.profile.comments,
        userId : state.auth.userId,
        isLogin : state.auth.isLogin
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addCom : () => dispatch(getAddCommentAT()),
        newComTrigger: (text) => dispatch(getActiveComTriggerAT(text)),
        getProfile : (userId) => dispatch(getProfile(userId))
    }
}

let AuthorCoponent = withRedirectToLogin(ProfileContainer);

let WithRouterComponent = withRouter(AuthorCoponent);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent);
