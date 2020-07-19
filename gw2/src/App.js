import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import AuthContainer from './containers/AuthContainer';
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
        <Route path='/' component={AuthContainer}/>
      </div>
    </Router>
  );
}

export default App;
