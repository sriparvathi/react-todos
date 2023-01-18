import React from "react";
import './App.css';
import Todos from './components/Todos';
import Todo from "./components/Todo";
import EditTodo from "./components/EditTodo";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
const App = () => {
 
  return (
    <div className="App">
      ToDo list
      <Router>
      <Routes>
        <Route path = '/' element = {<Todos/>}></Route>
        <Route path = '/:id' element = {<Todo/>}></Route>
        <Route path = '/:id/edit' element = {<EditTodo/>}></Route>
      </Routes>
      </Router>
      

      
    </div>
  );
}

export default App;
