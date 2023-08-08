import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [counter,setCounter] = useState(0);
    const Increment=()=> {
        setCounter(counter + 1);
    };
    const Decrement=()=>{
      if(counter>=1){
        setCounter(counter - 1);
      }
    };
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick = {Increment}>+</button>
        <button onClick = {Decrement}>-</button>
    </div> 
  )
}
