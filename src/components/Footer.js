import React from 'react';
import './Footer.css'; 
import './IconContainer'; 
import IconContainer from './IconContainer';

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
                <div className="mainFooterContainer">
                    <img src={this.props.profilePictureSrc} />
                    <div className="nameAndDateContainer" >
                        <p className="name">{this.props.className}</p>
                        <p className="date" >{this.props.date}</p>
                    </div>
                    <div className="shareIcon" ></div> 
                </div>

                :   
                <div className="mainFooterContainer">
                    <p className="shareWord" ></p>
                    <IconContainer>
                        {this.props.icon}
                    </IconContainer>
                    <div className="shareIcon active" ></div>
                </div>
                }

            </section>
        )
    }

    
    
    
}

export default Footer; 


/* 

                





                 <p className="shareWord" ></p>
                <IconContainer>
                    {this.props.icon}
                </IconContainer>
                <div className="shareIcon active" ></div>
                */