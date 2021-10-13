import React from 'react';
import './Footer.css'; 
import './IconContainer'; 

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
                    <p className="shareWord" ></p>
                        {this.props.icon}
                    <div className="shareIcon active" ></div>
                </div>
                :   
                <div className="mainFooterContainer">
                    <img src={this.props.profilePictureSrc} />
                    <div className="nameAndDateContainer" >
                        <p className="name">{this.props.name}</p>
                        <p className="date" >{this.props.date}</p>
                    </div>
                    <div className="shareIcon" ></div> 
                </div>
                }

            </section>
        )
    }

    
    
    
}

export default Footer; 
