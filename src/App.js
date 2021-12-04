import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todos from './features/todos/Todos'
import {selectCount} from './features/counter/counterSlice'
import styles from './features/counter/Counter.module.css';
// Edit <code>src/App.js</code> and save to reload.
function App() {

  const count = useSelector(selectCount);

  if (count === 4){
    document.getElementById('sentence-result').style.display = 'inline';
    //document.getElementById('sentence-result').style.visibility = 'visible';
  }else if (count <4 && count> 1)
  {
    document.getElementById('sentence-result').style.display = 'none';
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p id="sentence-result" className={styles.result}>
         
          <Todos/>.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      
    </div>
  );
}

export default App;
