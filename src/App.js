import './App.css';
// import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
// import { Tittle } from './components/Main/Tittle';
import { Routes, Route} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/Pages/About';
import { SignUp } from './components/Pages/SignUp';

function App() {
  return (
    <div className="App">
    <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    
    </div>
  );
}

export default App;
