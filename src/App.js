import './App.css';
import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Tittle } from './components/Main/Tittle';


function App() {
  return (
    <div className="App">
    <Header/>
    <Article/>
    <Tittle 
            titleOne="Jerseys bestsellers"
            titleTwo="bestsellers" 
            titleThree="Collection"
            subTitle="The jerseys of the best nba players of the regular seasons."

            />
    
    </div>
  );
}

export default App;
