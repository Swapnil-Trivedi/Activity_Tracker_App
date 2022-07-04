import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// Custom componenets imports
import ActivityState from './context/Activity/ActivityState';

function App() {
  return (
    <>
    <ActivityState>
    <Router>
    <Navbar/>
    <div className="container">
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>

      </Routes>
    </div>
    </Router>
    </ActivityState>
    </>
  );
}

export default App;
