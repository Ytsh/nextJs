"use client"; //This is due to next.js, 
// Server rendering
import { useState } from "react"; //state, this is to make dynamic 
// change to file on user input


function CounterDataFromParent({count, decreaseCount, increaseCount}){
    return (
        <div>
            <button onClick={ decreaseCount }> Decrement </button>
            <label>{ count }</label>
            <button onClick={ increaseCount }> Increment </button>
        </div>
    )
}
export default CounterDataFromParent;