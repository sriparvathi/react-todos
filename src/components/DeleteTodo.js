import { useNavigate } from "react-router-dom"
import {deleteTodo} from '../services/todos-api'

function Delete() {
    const nav = useNavigate()

    const deleteTheTodo = (e) => {
        const todo = {description: e.target.description.value, complete: false}
        createTodo(todo)
        nav('/')
    }

return(
    <div>
        <h4>Create a Todo</h4>
        <form onSubmit={createTheTodo}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create