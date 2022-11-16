import ProfileComments from './ProfilComments/ProfileComments';
import profStyle from './Profile.module.css'
import ProfileInfo from './ProfileInformation/ProfileInformation';

function Profile(props) {
  return (
    <div>
      <ProfileInfo profInfo={props.profInfo} />
      <ProfileComments comments={props.comments} activeCom={props.activeComment} addCom={props.addCom} newComTrigger={props.newComTrigger}/>
    </div>
  );
}

export default Profile;
