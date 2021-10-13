import './App.css';
import ArticlePreview from './components/ArticlePreview'; 
import Banner from './components/Banner'; 
import Footer from './components/Footer'; 
import TextPresentation from './components/TextPresentation'; 

function App() {
  return (
    <div className="App">
      <ArticlePreview>
        <Banner/>
        <TextPresentation/>
        <Footer/>
      </ArticlePreview>
    </div>
  );
}

export default App;
