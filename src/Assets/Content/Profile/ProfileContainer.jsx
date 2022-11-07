import { getActiveComTriggerAT, getAddCommentAT } from '../../../redux/profile-reducer';
import ProfileComments from './ProfilComments/ProfileComments';
import Profile from './Profile';
import profStyle from './Profile.module.css'
import ProfileInfo from './ProfileInformation/ProfileInformation';

function ProfileContainer(props) {

    let addCom = () =>{
        props.dispatch(getAddCommentAT())
    }

    let newComTrigger = (text) => {
        props.dispatch(getActiveComTriggerAT(text))
    }

    return (
        <div>
            <Profile profile={props.profile} addCom={addCom} newComTrigger={newComTrigger}/>
        </div>
    );
}

export default ProfileContainer;
