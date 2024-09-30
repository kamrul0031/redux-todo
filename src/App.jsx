import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {useState} from 'react';
import { createTodo, deleteTodo } from './features/todoSlice';

function App() {

  const [input, setInput] = useState("")
  const dispathch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const addTodoHandler = () => {
    const uniqueTodo = todos.every((item)=> item.todo !== input)
    console.log(uniqueTodo)
    if(uniqueTodo){
      dispathch(createTodo(input))
      setInput(" ")
    }
  }
  const deleteBtnHandler = (id) => {
    console.log(id)
    dispathch(deleteTodo(id))
  }
  
  return (
    <div>
      <input
      value={input}
      type="text" 
      onChange={(e)=>{setInput(e.target.value)}}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
      <ol>
      {todos.map((item)=>{
      return (
          <li key={item.id}>
            <h3>{item.todo} -- {item.time}</h3>
            <button>edit</button>
            <button onClick={()=>{deleteBtnHandler(item.id)}}>delete</button>
          </li>
      )
     })}
      </ol>
     
     <hr />
    </div>
  )
}

export default App
