import {useState, useEffect} from 'react'
import {getTodo} from "../services/todos-api"
import {useParams, useNavigate} from 'react-router-dom'

const Todo = () => {
  const nav = useNavigate() // naviagte 
  const {id} = useParams()// destructuring 
 const [todo, setTodo] = useState ({})
 useEffect(() => {getTodo(id)
 .then(res => setTodo(res.data))},[])
 return(
  <div>
      <h1>Todo:</h1>
      <h3>{todo.description}</h3>
      Completed: <input type='checkbox' defaultChecked={todo.complete} /> 
      <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button> 
      <button onClick={() => {nav('/')}}>Main</button> 
  </div>
)
}

export default Todo