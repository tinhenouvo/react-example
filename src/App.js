import React from 'react';
import logo from './logo.svg';
import HelloWorld from './components/helloworld'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
