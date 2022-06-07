import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {

  // Backend code
  // Hook, it's always known as "state", the way to add variables in the front end.
  const [useVar, setUseVar] = useState(1);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    // First thing that gets called when the page is created.
    if(useVar == 0)
    {
      setTemp("var is 0");
    }
    else
    {
      setTemp("var is 1");
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {temp}
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
