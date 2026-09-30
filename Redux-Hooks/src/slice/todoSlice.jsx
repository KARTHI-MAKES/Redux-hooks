import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

const addTodoFunction = (state, action) => {
    state.todos.push({
        id: nanoid(),
        title: action.payload,
    })
}

const removeTodoFunction = (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: addTodoFunction,
        removeTodo: removeTodoFunction,
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer