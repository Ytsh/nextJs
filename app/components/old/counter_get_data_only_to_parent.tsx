"use client"; //This is due to next.js, 
// Server rendering
import { useState } from "react"; //state, this is to make dynamic 
// change to file on user input

function CounterGetDataToParent({sendCountDataToParent}){
    const [count, setCount] = useState(0);
    const increaseCount = () =>{
        setCount(count+1);
        sendCountDataToParent(count+1);
    }

    const decreaseCount = ()=>{
        setCount(count -1);
        sendCountDataToParent(count-1);
    }

    return (
        <div>
            <button onClick={() => decreaseCount()}> Decrement </button>
            <label>{ count }</label>
            <button onClick={() => increaseCount() }> Increment </button>
        </div>
    )
}
export default CounterGetDataToParent;