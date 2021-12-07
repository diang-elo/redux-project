import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todos from './features/todos/Todos'
import { selectCount } from './features/counter/counterSlice'
import styles from './features/counter/Counter.module.css';
// Edit <code>src/App.js</code> and save to reload.
function App() {

  const count = useSelector(selectCount);

  if (count === 4) {
    document.getElementById('sentence-result').style.display = 'inline';
    //document.getElementById('sentence-result').style.visibility = 'visible';
  } else if (count < 4 && count > 1) {
    document.getElementById('sentence-result').style.display = 'none';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p id="sentence-result" className={styles.result}>

          <Todos />.
        </p>
        <span>
          <span>Extra Info -- </span>
          <a
            className="App-link"
            href="https://youtu.be/vOpnxXQiCH4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <span> -- </span>
          <a
            className="App-link"
            href="https://github.com/diang-elo/redux-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git Repo
          </a>
          <span> -- </span>
          <a
            className="App-link"
            href="https://www.diangelo.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <span> -- </span>
          <a
            className="App-link"
            href="https://thinkeasy.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Think Easy
          </a>
        </span>
      </header>

      <div className = "bubbles">
        <img src="https://i.ibb.co/VW320gj/logo.png" alt="lightBublb1"/>
        <img src="https://i.ibb.co/FYW5jVG/bozz2.png" alt="boss1"/>
        <img src="https://i.ibb.co/VW320gj/logo.png" alt="lightBublb2"/>
        <img src="https://i.ibb.co/q0b0LXS/bozz.png" alt="boss2"/>
        <img src="https://i.ibb.co/VW320gj/logo.png" alt="lightBublb3"/>
        <img src="https://i.ibb.co/QPb6rww/bozz3.png" alt="boss3"/>
        <img src="https://i.ibb.co/VW320gj/logo.png" alt="lightBublb4"/>
        
      </div>



      <div className="image-container">
        <div className="pot">
          
          <img id="bossnme"src="https://i.ibb.co/vsVWpdP/Bosses-and-me.png" alt="allofus" width="150px" height="150px" />
        </div>
        
      </div>

    </div>
  );
}

export default App;
