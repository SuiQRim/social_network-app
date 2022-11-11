import { connect } from 'react-redux';
import { getActiveComTriggerAT, getAddCommentAT } from '../../../redux/profile-reducer';
import Profile from './Profile';
import profStyle from './Profile.module.css'

const mapStateToProps = (state) => {
    return {
        profile : state.profile
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addCom : () => dispatch(getAddCommentAT()),
        newComTrigger: (text) => dispatch(getActiveComTriggerAT(text))
    }
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default ProfileContainer;
