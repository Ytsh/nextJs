import { useState } from "react";


interface todo{
    id: number;
    text: string;
    completed: boolean;
}
export default function TodoApp (){
    const [todo, setTodo] = useState<todo[]>([]);
    const [newTodo, setNewTodo] = useState("");
    let i = 0;
    const addTodo = () =>{
        if(newTodo.trim() === "") return;   //trim remove unwanted whitespaces
        const newTask:todo ={
            id: ++i,
            text:newTodo,
            completed:false
        }
        setTodo([...todo, newTask])
        setNewTodo("");
    }

    return(
        <div>
            <h1>Todo App</h1>
            <div>
                <input type="text" value={newTodo} onChange={ (e) => setNewTodo(e.target.value)} />
                <button onClick={addTodo}> Add </button>
            </div>
            <div>
                <ul>
                    { todo.map( todo => (
                        <li key={todo.id}> {todo.text} </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}