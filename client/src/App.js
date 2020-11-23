import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';





function App() {
   
  //State variables and API resource
  const [apiResponse, setapiResponse] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setapiResponse(res))
      .catch(err => err)
  }

  function componentDidMount() {
    callAPI()
  }

  componentDidMount();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
          {apiResponse}
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
