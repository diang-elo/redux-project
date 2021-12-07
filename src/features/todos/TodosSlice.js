import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        add(state,{ payload }){
            state.push(payload)
        },
        del0(state, {payload}){
            state.splice(0,1,payload)
        },
        del1(state, {payload}){
            state.splice(1,1,payload)
        },
        del2(state, {payload}){
            state.splice(2,1,payload)
        },
        del3(state, {payload}){
            state.splice(3,1,payload)
        },
    },
})

export const { add, del0, del1, del2, del3 } = todoSlice.actions

export const selectTodos = ({ todos }) => todos

export default todoSlice.reducer 