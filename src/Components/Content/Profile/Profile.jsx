import ProfileComments from './ProfilComments/ProfileComments';
import ProfileInfo from './ProfileInformation/ProfileInformation';

function Profile(props) {
  return (
    <div>
      <ProfileInfo profInfo={props.profInfo} isMyAccount={props.isMyAccount} editStatus={props.editStatus} status={props.status}/>
      <ProfileComments comments={props.comments} activeCom={props.activeComment} addCom={props.addCom} newComTrigger={props.newComTrigger}/>
    </div>
  );
}

export default Profile;
