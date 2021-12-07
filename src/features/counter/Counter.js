import React, { useState } from 'react';
import {add, del0, del1, del2, del3} from '../todos/TodosSlice';
import { selectTodos } from "../todos/TodosSlice"

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //const [incrementAmount, setIncrementAmount] = useState('2');
  const [todoTxt, setTodoTxt] = useState('');
  const todo = useSelector(selectTodos);
 
  console.log(todo);

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
  if (count === 4) {
    document.getElementById('next-btn').style.visibility = 'visible';
    //document.getElementById('sentence-result').style.visibility = 'visible';
  } 
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
        <div id="next-btn" className={styles.nextbtn}>
        <button
          
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          
        >
          Next
        </button>
        </div>
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
            if(todo[count]){
              if(count===0){dispatch(del0(todoTxt))
                setTodoTxt('')
                dispatch(increment())}
              if(count===1){dispatch(del1(todoTxt))
                setTodoTxt('')
                dispatch(increment())}
              if(count===2){dispatch(del2(todoTxt))
                setTodoTxt('')
                dispatch(increment())}
              if(count===3){dispatch(del3(todoTxt))
                setTodoTxt('')
                dispatch(increment())}
            }else{
            dispatch(add(todoTxt))
            dispatch(increment())
            setTodoTxt('')}
          }}
          //onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Enter
        </button>
      
        
      </div>
    </div>
  );
}
