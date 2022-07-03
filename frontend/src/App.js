import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// Custom componenets imports

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="container">
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>

      </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;
