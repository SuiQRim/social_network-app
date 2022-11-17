import React from 'react';
import { connect } from 'react-redux';
import { getActiveComTriggerAT, getAddCommentAT, getProfile } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends React.Component{
    componentDidMount(){
        
        let userId = this.props.router.params.userId;

        if(!userId) userId = this.props.userId;

        this.props.getProfile(userId);
    }
    render(){
        return <Profile {...this.props} /> 
    }
}


const mapStateToProps = (state) => {
    return {
        profInfo : state.profile.information,
        comments : state.profile.comments,
        userId : state.auth.userId
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addCom : () => dispatch(getAddCommentAT()),
        newComTrigger: (text) => dispatch(getActiveComTriggerAT(text)),
        getProfile : (userId) => dispatch(getProfile(userId))
    }
}

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
