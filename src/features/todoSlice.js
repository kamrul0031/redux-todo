import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        createTodo(state, action) {
            state.todos.push({
                id: Date.now(),                  // Unique ID using timestamp
                todo: action.payload,            // The todo message from the payload
                time: new Date().toLocaleString(), // Set time when the todo is created
                completed: false                 // Initial completed status is false
            });
        },
        updateTodo(state,action){
            const {id,newTodo} = action.payload
            const updatedTodo = state.todos.find((todo) => todo.id === id)
            if(updatedTodo){
                updatedTodo.todo = newTodo;
                updatedTodo.time = new Date().toLocaleString()
            }
        }, 
        deleteTodo(state,action){
           state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})
export const {createTodo,deleteTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer