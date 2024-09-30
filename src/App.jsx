import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react';
import { createTodo, updateTodo, deleteTodo } from './features/todoSlice';

function App() {
  const [input, setInput] = useState("");
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch(); // Fixed typo
  const todos = useSelector((state) => state.todos.todos);

  // Add new todo
  const addTodoHandler = () => {
    const uniqueTodo = todos.every((item) => item.todo !== input);
    if (uniqueTodo) {
      dispatch(createTodo(input));
      setInput(""); // Cleared input after adding
    }
  };

  // Update existing todo
  const updateBtnHandler = (id) => {
    if (newTodo.trim()) {
      dispatch(updateTodo({ id, newTodo }));
      setNewTodo(""); // Clear the newTodo input after updating
    }
  };

  // Delete todo by id
  const deleteBtnHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={addTodoHandler}>Add Todo</button>
      
      <ol>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.todo} -- {item.time}</h3>
              <button onClick={() => updateBtnHandler(item.id)}>Edit</button>
              <button onClick={() => deleteBtnHandler(item.id)}>Delete</button>
            </li>
          );
        })}
      </ol>

      <hr />

      <input 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Update todo input"
        type="text"
      />
    </div>
  );
}

export default App;
