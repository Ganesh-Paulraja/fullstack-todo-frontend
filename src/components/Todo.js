import React, { useEffect, useState } from 'react'
import './Todo.scss'
import TodoTask from './TodoTask'
import {getAllToDo, addToDo, updateToDo, deleteToDo} from '../Utils/HandleApi'

export default function Todo() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isupdating, setIsupdating] = useState(false)
  const [toDoId, settoDoId] = useState("") 

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault()
    isupdating ? updateToDo(toDoId, text, setToDo, setText, setIsupdating) : addToDo(text, setText, setToDo)
  }
  const updateMode = (_id, text) => {
    setIsupdating(true)
    setText(text)
    settoDoId(_id)
  }
  return (
    <div className='gg-todo-wrap'>
        <h1>ToDo App</h1>
        <div className="gg-input-wrap">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="" placeholder='Add Task...' value={text} onChange={(e) => setText(e.target.value)}/>
                <button type='submit'>
                  {isupdating ? "Update" : "Add"}
                </button>
            </form>
            <div className='gg-list'>
                {toDo.map((item) => <TodoTask key={item._id} text={item.text} updateMode={(e) => {
                  e.preventDefault()
                  updateMode(item._id, item.text)}} 
                deleteToDo={(e) => {
                  e.preventDefault()
                  deleteToDo(item._id, setToDo)
                }} 
                  />)}
            </div>
        </div>
        
    </div>
  )
}
