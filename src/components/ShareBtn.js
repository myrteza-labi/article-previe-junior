import './ShareBtn.css'; 

function ShareBtn(props){
    return(
        <div className={props.ContainerClassName} >
            <img src={props.src} 
                 alt={"une fleche indiquant le partage vers d'autres plateformes"} 
                 className={props.shareBtnClassName}/>
        </div>
    )
}

export default ShareBtn;  