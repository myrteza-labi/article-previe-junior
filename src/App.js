import './App.css'; 
import ArticlePreview from './components/ArticlePreview'; 
import Banner from './components/Banner'; 
import Footer from './components/Footer'; 
import IconContainer from './components/IconContainer';
import Icon from './components/Icon'
import TextPresentation from './components/TextPresentation'; 
import profilepicture from './images/avatar-michelle.jpg'; 
import facebookIcon from './images/icon-facebook.svg'; 
import twitterIcon from './images/icon-twitter.svg'; 
import pinterestIcon from './images/icon-pinterest.svg'; 


function App() {
  return (
    <div className="App">
      <ArticlePreview>
        <Banner/>

        <div className="textAndFooterContainer">
        <TextPresentation/>

        <Footer 
          profilePictureSrc={profilepicture} 
          name={"Michelle Appleton"} 
          date={"28 juin 2020"}
          icon={
              <IconContainer>
                <Icon src={facebookIcon} alt={""}/>
                <Icon src={twitterIcon} alt={""}/>
                <Icon src={pinterestIcon} alt={""}/>
              </IconContainer>
          }/>
        </div>
        
        

      </ArticlePreview>
    </div>
  );
}

export default App;
