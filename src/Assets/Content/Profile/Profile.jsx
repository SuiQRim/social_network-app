import ProfileComments from './ProfilComments/ProfileComments';
import profStyle from './Profile.module.css'
import ProfileInfo from './ProfileInformation/ProfileInformation';

function Profile(props) {
  return (
    <div>
      <ProfileInfo name={props.profile.name} />
      <ProfileComments comments={props.profile.comments} activeCom={props.profile.activeComment} addCom={props.addCom} newComTrigger={props.newComTrigger}/>
    </div>
  );
}

export default Profile;
