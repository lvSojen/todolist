import React, { useState } from "react"
import "./App.css"
import { Button, Container } from "react-bootstrap"
import TodoTable from "./components/TodoTable"
import NewTodoForm from "./components/NewTodoForm"
function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false)
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plant", rowAssigned: "User two" },
    {
      rowNumber: 3,
      rowDescription: "Work on homework",
      rowAssigned: "User three",
    },
  ])
  const addTodo = (description, assigned) => {
    let rowNumber = 0
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1
    } else {
      rowNumber = 1
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    }
    setTodos((todos) => [...todos, newTodo])
    console.log(todos)
  }
  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    })
    setTodos(filtered)
  }
  const deleteAll = () => {
    setTodos([])
  }
  const hideForm = () => {
    setShowAddTodoForm(!showAddTodoForm)
  }
  return (
    <Container className="mt-5">
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      <Button className="mt-3" variant="danger" onClick={deleteAll}>
        Delete all
      </Button>{" "}
      <Button className="mt-3" variant="info" onClick={hideForm}>
        {showAddTodoForm ? "Hide" : "Show"} toDo Form
      </Button>
      {showAddTodoForm ? <NewTodoForm addTodo={addTodo} /> : null}
    </Container>
  )
}

export default App
