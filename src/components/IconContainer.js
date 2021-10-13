import './IconContainer.css'; 

function IconContainer(props){
    return(
        <div className="IconContainer" >
            {props.children}
        </div>
    )
}

export default IconContainer; 