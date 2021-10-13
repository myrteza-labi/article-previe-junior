import './App.css'; 
import ArticlePreview from './components/ArticlePreview'; 
import Banner from './components/Banner'; 
import Footer from './components/Footer'; 
import IconContainer from './components/IconContainer';
import Icon from './components/Icon'
import TextPresentation from './components/TextPresentation'; 



function App() {
  return (
    <div className="App">
      <ArticlePreview>
        <Banner/>

        <div className="textAndFooterContainer">
        <TextPresentation/>

        <Footer/>
        </div>
        
        

      </ArticlePreview>
    </div>
  );
}

export default App;
