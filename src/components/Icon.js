import './Icon.css'; 

function Icon(props){
    return(
        <img src={props.src} alt={props.alt} className="icon" />
    )
}

export default Icon; 