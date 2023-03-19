import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
function NewTodoForm(props) {
  const [description, setDescription] = useState("")
  const [assigned, setAssigned] = useState("")
  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned)
      setAssigned("")
      setDescription("")
    }
  }
  const descriptionChange = (event) => {
    console.log(event.target.value)
    setDescription(event.target.value)
  }
  const assignedChange = (event) => {
    console.log(event.target.value)
    setAssigned(event.target.value)
  }
  return (
    <Form className="mt-5">
      <Form.Group controlId="assignedInput">
        <Form.Label style={{ fontWeight: "bold" }}>Assigned</Form.Label>
        <Form.Control
          type="text"
          required
          value={assigned}
          onChange={assignedChange}
        />
      </Form.Group>
      <Form.Group controlId="descriptionInput">
        <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
        <Form.Control
          as="textarea"
          required
          value={description}
          onChange={descriptionChange}
          rows={3}
        />
      </Form.Group>
      <Button className="mt-3" onClick={submitTodo}>
        Add Todo
      </Button>
    </Form>
  )
}

export default NewTodoForm
