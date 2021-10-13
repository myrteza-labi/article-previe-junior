import './IconContainer.css'; 
import Icon from './Icon';
import facebookIcon from '../images/icon-facebook.svg'; 
import twitterIcon from '../images/icon-twitter.svg'; 
import pinterestIcon from '../images/icon-pinterest.svg'; 

function IconContainer(props){
    return(
        
        <div className="IconContainer" >
            <Icon src={facebookIcon} alt={"icon Facebook"}/>
            <Icon src={twitterIcon} alt={"icon Twitter"}/>
            <Icon src={pinterestIcon} alt={"icon Pinterest"}/>
        </div>
    )
}

export default IconContainer; 