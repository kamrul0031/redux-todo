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
        deleteTodo(state,action){
           state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})
export const {createTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer