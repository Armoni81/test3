
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Tig from './components/home';
import React from"react"
import SignUp1 from './components/signin';


export default function App() {
  return (
    <Router>
      <div className="App">
        <button>HILL</button>
        <button>to Tig</button>
      </div>
      <Routes>
        <Route path="/Tig" element = {<Tig/>}/>
        <Route path="/signup" element = {<SignUp1/>}/>
      </Routes>
    </Router>
    
  );
}


