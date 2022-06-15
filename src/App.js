import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import User from "./Components/User"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import ManageAdmin from './Components/ManageAdmin';

function App() {
/*
  fetch("https://api.nomics.com/v1/currencies/ticker?key=c3dcb27c89e8009159eb873d4a6477e3c0dd59b7&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
  .then(response => response.json())
  .then(data => console.log(data))
  
*/
  return (
    <div className="gradient-bg-welcome"> 
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<User />} />
          <Route exact path="/manageadmin" element={<ManageAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
