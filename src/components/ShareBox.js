import './ShareBox.css'; 
import IconContainer from './IconContainer';

function ShareBox(props){
    return (
        <div className={"ShareBox "+props.className}>
            <p className="shareWord" >{props.shareWord}</p>
            <IconContainer/>
            <div className="downTriangleContainer">
                <div className="downTriangle" ></div>
            </div>
        </div>
    )
}

export default ShareBox;   