import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { getActiveComTriggerAT, getAddCommentAT, setProfileInfo } from '../../../redux/profile-reducer';
import Profile from './Profile';
import style from './Profile.module.css'

class ProfileContainer extends React.Component{

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(responce => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
