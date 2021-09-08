import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.svg';
import './App.css';

function App() {

  const [aa, setAa] = useState(1);

  console.log(aa);

  setTimeout(() => {
    setAa(2);
  }, 10000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
