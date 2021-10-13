import React from 'react';
import './Footer.css'; 
import './IconContainer'; 
import ProfileBox from './ProfileBox'; 
import ShareBtn from './ShareBtn'; 
import ShareBox from './ShareBox'; 
import shareBtnStatic from '../images/icon-share.svg'; 
import shareBtnActive from '../images/icon-share-active.svg'; 
import profilepicture from '../images/avatar-michelle.jpg';



    
    
    class Footer extends React.Component{
        constructor(props){
            super(props); 
            this.state = {
                renderedFooter: this.footerStatic,
                className: "Footer footerMobileStatic",
                isStatic: true,
                isDesktop : (window.innerWidth >= 1440 ? true: false) ,
            }
            this.handleClick = this.handleClick.bind(this)
            this.isStatic = this.isStatic.bind(this); 
            this.displayDesktopFooterActive = this.displayDesktopFooterActive.bind(this); 
            this.displayFooterStatic = this.displayFooterStatic.bind(this); 
            this.displayMobileFooterActiv = this.displayMobileFooterActiv.bind(this); 
            this.limitFunc = this.limitFunc.bind(this); 


    }
    
    limitFunc(){
        let isStatic = this.state.isStatic;
        let isDesktop = this.state.isDesktop; 
        let className= this.state.className; 
        if(window.innerWidth >= 1440){
            this.setState({
                isDesktop : true,
            })
        }
        else{
            this.setState({
                isDesktop : false,
            })
        }
    }
/*
        if(isStatic && isDesktop){
            if(className == !"Footer footerMobileStatic"){
                this.displayFooterStatic();
            }
        }
        else if (!isStatic && isDesktop){
            if(className == !"Footer footerDesktopActive"){
                this.displayDesktopFooterActive()
            }
        } else if (isStatic && !isDesktop){
            if(className == "Footer footerMobileStatic"){
                this.displayFooterStatic()
            }
        } else if(!isStatic && !isDesktop){
            if(className == !"Footer footerMobileActive"){
                this.displayMobileFooterActiv()
            }
        }
    }
    */


    isStatic(){
        if(this.state.isStatic === true){
            return true
        }
    }

    displayFooterStatic(){
        this.setState({
            renderedFooter : this.footerStatic,
            className: "Footer footerMobileStatic",
            isStatic: true,
        })
    }

    displayDesktopFooterActive(){
        this.setState({
            renderedFooter : this.desktopFooterActive,
            className: "Footer footerDesktopActive",
            isStatic: false,
        })
    }

    displayMobileFooterActiv(){
        this.setState({
            renderedFooter : this.mobileFooterActive,
            className: "Footer footerMobileActive",
            isStatic: false,
        })
    }

    handleClick(){
        let isStatic = this.state.isStatic;
        let isDesktop = this.state.isDesktop; 

        if( isStatic && !isDesktop){
            this.displayMobileFooterActiv(); 
        }
        else if (!isStatic && !isDesktop){
            this.displayFooterStatic();
        }
        else if(isStatic && isDesktop){
            this.displayDesktopFooterActive(); 
        }
        else if(!isStatic && isDesktop){
            this.displayFooterStatic();
        }
    }
    

    footerStatic = 

    <div className="footerMainContainer footerMainContainerStatic" >
            <ProfileBox srcProfilePicture={profilepicture} 
                        altProfilePicture={"Michelle Appleton"}
                        name={"Michelle Appleton"}
                        date={"28 juin 2020"}/>

            <ShareBtn   src={shareBtnStatic} 
                        onClick={()=> this.handleClick()}
                        ContainerClassName={"shareBtnContainer shareBtnContainerStatic"} 
                        shareBtnClassName={"shareBtn shareBtnMobileStatic"}/>
    </div>


    mobileFooterActive = 
            <div className="footerMainContainer footerMainContainerActive">
                <ShareBox   className="ShareBox ShareBoxMobile" 
                            shareWord={"SHARE"} />

                <ShareBtn   ContainerClassName={"shareBtnContainer shareBtnContainerActive"}
                            onClick={()=> this.handleClick()}
                            shareBtnClassName={"shareBtn shareBtnMobileActive"}
                            src={shareBtnActive}/>
            </div>
    

    desktopFooterActive= 
        <div className="footerMainContainer footerMainContainerDesktopActive">
            <ProfileBox srcProfilePicture={profilepicture} 
                            altProfilePicture={"Michelle Appleton"}
                            name={"Michelle Appleton"}
                            date={"28 juin 2020"}/>

            <ShareBtn   ContainerClassName={"shareBtnContainer shareBtnContainerActive"}
                        onClick={()=> this.handleClick()}
                        shareBtnClassName={"shareBtn shareBtnDesktopActive"}
                        src={shareBtnActive}/>

            <ShareBox   className="ShareBox ShareBoxDesktopActive" 
                        shareWord={"SHARE"} />

            
        </div>


    render(){
        
        window.addEventListener("resize", this.limitFunc);
        window.addEventListener("onload", this.limitFunc);
        
            

        return(
            <section id="Footer" className={this.state.className} >
                {this.state.renderedFooter}
            </section>
        )
    }

    
    
    
}

export default Footer; 
