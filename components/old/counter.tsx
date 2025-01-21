"use client"; //This is due to next.js, 
// Server rendering
import { useState } from "react"; //state, this is to make dynamic 
// change to file on user input
// import '../styles/counter.css';
import styles from '../styles/button.module.css';

function Counter(){
    const [count, setCount] = useState(0);
    function increaseCount(){
        setCount(count+1);
    }
    function decreaseCount(){
        setCount(count -1);
    }
    const resetCounter = () =>{
        setCount(0);
    }
    return (
        <div>
            <div>
                <label>Counter</label>
                <button className= {styles.button} onClick={()=>{
                    resetCounter()
                }} > Reset </button>
            </div>
            <button onClick={() => decreaseCount()}
                className="bg-blue-500 hover:bg-blue-
                700 text-white font-bold py-2 px-4 rounded-full">
                     Decrement </button>
            <label>{ count }</label>
            <button onClick={() => increaseCount() }
                className="bg-blue-500 hover:bg-blue-
                700 text-white font-bold py-2 px-4 rounded-full"> Increment </button>
        </div>
    )
}
export default Counter;