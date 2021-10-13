import './ShareBox.css'; 
import IconContainer from './IconContainer';

function ShareBox(props){
    return (
        <div className={"ShareBox "+props.className}>
            <p className="shareWord" >{props.shareWord}</p>
            <IconContainer/>
        </div>
    )
}

export default ShareBox;   