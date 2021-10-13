import React from 'react';
import './Footer.css'; 
import './IconContainer'; 
import shareIcon from '../images/icon-share.svg'; 
import shareIconActive from '../images/icon-share-active.svg'; 


class Footer extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            renderedFooter: "",
            className: "Footer active",
        }
    }
    
    


    render(){
        return(
            <section id="Footer" className={this.state.className} >

                {this.state.className == "Footer active"
                ?
                <div className="mainFooterContainer mainFooterContainerActive">
                    <p className="shareWord" >SHARE</p>
                        {this.props.icon}
                        
                        <div className="shareContainer shareContaineractive " >
                            <img src={shareIconActive} 
                            alt={"une fleche indiquant le partage vers d'autre plateforme"} 
                            className="shareIcon shareIconactive"/>
                        </div>
                    
                </div>
                :   
                <div className="mainFooterContainer mainFooterContainerStatic">
                    <img className="profilePicture" src={this.props.profilePictureSrc} />
                    <div className="nameAndDateContainer" >
                        <p className="name">{this.props.name}</p>
                        <p className="date" >{this.props.date}</p>
                    </div>
                    <div className="shareContainer shareContainerStatic " >
                        <img src={shareIcon} 
                        alt={"une fleche indiquant le partage vers d'autre plateforme"} 
                        className="shareIcon"/> 
                    </div>
                    
                </div>
                }

            </section>
        )
    }

    
    
    
}

export default Footer; 
