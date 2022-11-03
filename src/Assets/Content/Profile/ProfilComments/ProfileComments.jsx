import comStyle from './ProfileComments.module.css'
import ProfileCommentsInput from "./ProfileCommentsInput/ProfileCommentsInput";
import ProfileCommentsItem from "./ProfileCommentsItem/ProfileCommentsItem";

function ProfileComments(props) {

  let listOfComment = props.comments.map(com => <ProfileCommentsItem name={com.name} text={com.text} />);


  return (
    <div className={comStyle.content}>
      
      <ProfileCommentsInput activeCom={props.activeCom} dispatch={props.dispatch}/>
      
      <div className={comStyle.comments}>
        {listOfComment}
      </div>


    </div>
  );
}

export default ProfileComments;
