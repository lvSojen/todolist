import React from "react"
import { Card } from "react-bootstrap"
import TodoRowItem from "./TodoRowItem"
function TodoTable(props: {todos: TodoModel[], deleteTodo: Function}) {
  return (
    <Card>
      <Card.Header className="text-center">To do list</Card.Header>
      <Card.Body>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Assigned</th>
            </tr>
          </thead>

          <tbody>
            {props.todos.map((todo) => (
              <TodoRowItem
                key={todo.rowNumber}
                rowNumber={todo.rowNumber}
                rowDescription={todo.rowDescription}
                rowAssigned={todo.rowAssigned}
                deleteTodo={props.deleteTodo}
              />
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  )
}

export default TodoTable