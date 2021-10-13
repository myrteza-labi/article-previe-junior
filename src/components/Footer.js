import React from 'react';
import './Footer.css'; 
import './IconContainer'; 
import ProfileBox from './ProfileBox'; 
import ShareBtn from './ShareBtn'; 
import ShareBox from './ShareBox'; 
import shareBtnStatic from '../images/icon-share.svg'; 
import shareBtnActive from '../images/icon-share-active.svg'; 
import profilepicture from '../images/avatar-michelle.jpg';
import IconContainer from './IconContainer';




class Footer extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            renderedFooter: "",
            className: "Footer footerMobileStatic",
            windowWidth: window.innerWidth,
        }
    }
    
 


    render(){

        

        let renderedFooter; 

        let mobileFooterStatic = 

        <div className="footerMainContainer footerMainContainerStatic" >
                <ProfileBox srcProfilePicture={profilepicture} 
                            altProfilePicture={"Michelle Appleton"}
                            name={"Michelle Appleton"}
                            date={"28 juin 2020"}/>

                <ShareBtn   src={shareBtnStatic} 
                            ContainerClassName={"shareBtnContainer shareBtnContainerStatic"} 
                            shareBtnClassName={"shareBtn shareBtnStatic"}/>
        </div>

        


















        let mobileFooterActive = 
            <div className="footerMainContainer footerMainContainerActive">
                <ShareBox   className="ShareBoxMobile" 
                            shareWord={"SHARE"} />

                <ShareBtn   ContainerClassName={"shareBtnContainer shareBtnContainerActive"}
                            shareBtnClassName={"shareBtn shareBtnActive"}
                            src={shareBtnActive}/>
            </div>



        /*
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
            </div>;
        </div>*/

        /*
        
        */
        
            

        return(
            <section id="Footer" className={this.state.className} >
                {mobileFooterStatic}
            </section>
        )
    }

    
    
    
}

export default Footer; 


/*






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






*/