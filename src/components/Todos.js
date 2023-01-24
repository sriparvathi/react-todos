import Todo from "./Todo"
import {getTodos} from "../services/todos-api";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Create from "./CreateTodo"

export default function Todos() {
    const [todos, setTodos] = useState([]) // useState hook allow storing the data from json into a variable called todos using settodos.
    //// useeffect hook will take 2 arguments, 1 is arrow function and the other is dependency variable will excute after rendering the component. if no value in dependency variable array then useeffect executes only once.
    useEffect (() => { 
        getTodos() // calling the function to get data
        .then (res => setTodos(res.data)) // setting state with returned data
    }, []) 
    console.log (todos) // logging returned data 
    // to print the list of todos data we use .map to hydrate the array and list the description of todos using id reference.

    return(
        <div>
            <h1 className="heading">To Do list</h1>
            <ul className="alltodos">
            {todos.map((todo) => {
                return (
                    <div>
                    <Link to={`/${todo._id}`}>{todo.description}</Link>
                    </div>
                    // <div>
                    //     {todo.complete ? <li style = {{textDecorationLine: "line-through", Color: "white"}}><a href={`/${todo._id}`}>{todo.description}</a></li> : 
                    //     <li style = {{backgroundColor: "green"}}><a href={`/${todo._id}`}>{todo.description}</a></li>}
                    // </div>
                    
                )
            })}
            </ul>
            <Create/>
            
        </div>
    )
}