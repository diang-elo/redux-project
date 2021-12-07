//import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from "./TodosSlice"

export default function Todos() {
    const todos = useSelector(selectTodos)
    return todos.map((todo) => todo + " ")
}
