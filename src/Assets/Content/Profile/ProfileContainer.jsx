import React from 'react';
import { connect } from 'react-redux';
import { getActiveComTriggerAT, getAddCommentAT, setProfileInfo } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getProfile } from '../../../api/api';

class ProfileContainer extends React.Component{
    componentDidMount(){
        
        let userId = this.props.router.params.userId;

        if(!userId) userId = this.props.userId;

        getProfile(userId).then(data => {
            this.props.setProfileInfo(data);
        })
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
        setProfileInfo : (profileInfo) => dispatch(setProfileInfo(profileInfo))
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
