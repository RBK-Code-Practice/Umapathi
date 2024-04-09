import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inventory/>
      </header>
    </div>
  );
}

export default App;
