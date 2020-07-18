import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Profile from './components/Profile';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <p> Navigation placeholder</p>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Profile Stuff</p>
        </header>
        <Route path='/:id' component={Profile}/>
      </div>
    </Router>
  );
}

export default App;
