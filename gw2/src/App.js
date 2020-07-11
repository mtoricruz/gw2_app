import React from 'react';
import Profile from './components/Profile'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Profile Stuff</p>
        <Profile />
      </header>
    </div>
  );
}

export default App;
