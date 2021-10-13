import './ProfilePicture.css'; 

function ProfilePicture(props){
    return (
        <img src={props.src} alt={props.alt} className="profilePicture" />
    )
}

export default ProfilePicture; 