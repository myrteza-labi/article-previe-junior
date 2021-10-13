import './ProfileBox.css'; 
import ProfilePicture from './ProfilePicture';

function ProfileBox(props){

    let src = props.srcProfilePicture; 
    let alt = props.altProfilePicture; 

    return(

        <div className="ProfileBox" >
            <ProfilePicture src={src} alt={"photo de profile de " + alt}/>
            <div className="profileInfoContainer" >
                <p className="name" >{props.name}</p>
                <p className="date" >{props.date}</p>
            </div>
        </div>
    )
}

export default ProfileBox;  