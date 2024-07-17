import React, { useState } from 'react'

import './App.css'

const App = () => {
  let [counter,setCounter]=useState(0);
  let stock=10;

  return (
    <div className='wrapper'>
      <button className='minus' disabled={counter===0} onClick={()=>{
        if(counter>0){
          setCounter(counter-1)
        }
      }}>-</button>
      <p>{counter}</p>
      <button className='plus' onClick={()=>{
        if(counter<stock){
          setCounter(counter+1)
        }
      }}>+</button>
      
    </div>
  )
}

export default App
