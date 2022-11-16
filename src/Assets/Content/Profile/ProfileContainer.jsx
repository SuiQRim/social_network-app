import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { getActiveComTriggerAT, getAddCommentAT, setProfileInfo } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.router.params.userId;
        if(!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(responce => {
            this.props.setProfileInfo(responce.data);
        })
    }
    render(){
        return <Profile {...this.props} /> 
    }
}


const mapStateToProps = (state) => {
    return {
        profInfo : state.profile.information,
        comments : state.profile.comments
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
