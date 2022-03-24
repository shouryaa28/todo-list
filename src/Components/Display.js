import React, { useState,useEffect } from 'react';
import './Display.css'
import Form from "./Form";
import Todolist from "./Todolist";

const Display = () => {

  const initState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initState)
  const [input, setInput] = useState("")
  const [editTodo,setEditTodo] = useState(null)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);
  
  return (
    <div className='containerr'>
      <div className='app-wrapper'>
        <div className='header'>
          <h1>To-do list</h1>
          <div>
            <Form 
            input={input}
            setInput = {setInput}
            todos = {todos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
            setTodos = {setTodos}/>
            <div>
              <Todolist todos={todos} setEditTodo={setEditTodo} setTodos={setTodos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display