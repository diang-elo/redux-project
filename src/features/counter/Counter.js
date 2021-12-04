import React, { useState } from 'react';
import {add} from '../todos/TodosSlice';
import Todos from '../todos/Todos'
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //const [incrementAmount, setIncrementAmount] = useState('2');
  const [todoTxt, setTodoTxt] = useState('');

 
  var answers = [];
  const current = ""

  var question = "";
  if (count === 0){
    question = "Who?";
  }
  else if (count === 1){
    question = "What?";
  }
  else if (count === 2){
    question = "When?";
  }
  else if (count === 3){
    question = "Where?";
  }
  else if (count === 4){
    question = "Complete!";
  }
  
  /*
  let btnGet = document.querySelector('#btn-get')
  let InputGet = document.querySelector('#input-get')

  btnGet.addEventListener('click', () =>{
    answers[count] = InputGet.value;
    localStorage.setItem(current.toString(),InputGet.value);
    console.log(answers)
  });
  */
  
  //const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Back
        </button>
        <span className={styles.value}>{question}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          
        >
          Next
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          //aria-label="Set increment amount"
          //id="input-get"
          value={todoTxt}
          //onChange={setTodoTxt}
          //value={incrementAmount}
          onChange={(e) => setTodoTxt(e.target.value)}
        />
        <button
          className={styles.button}
          id="btn-get"
          onClick={() => {
            dispatch(add(todoTxt))
            dispatch(increment())
            setTodoTxt('')
          }}
          //onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Enter
        </button>
      
        
      </div>
    </div>
  );
}
