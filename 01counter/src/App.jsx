import { useState } from 'react'
import './App.css'

function App() {
 //const counter = 1
const [counter,setCounter]=useState(0);
const incCount = ()=>{
setCounter(counter+1)
}
const decCount = ()=>{
 setCounter(counter-1)
}
  
  return (
   <>
    <h1>Simple Counter</h1>
    <h1>Counter Value : {counter} </h1>
    <button onClick={incCount}>Increase Count</button>
    <br />
    <button onClick={decCount}>Decrease Count</button>
   </>
  )
}

export default App
