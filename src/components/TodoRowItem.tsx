import React from "react"
import { Button } from "react-bootstrap"

function TodoRowItem(props: {
  rowNumber: number
  rowDescription: string
  rowAssigned: string
  deleteTodo: Function
}) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td style={{ width: "1%" }}>
        <Button
          variant="danger"
          style={{ border: "none" }}
          onClick={() => props.deleteTodo(props.rowNumber)}
        >
          DELETE
        </Button>
      </td>
      <td style={{ width: "1%" }}>
        <Button
          variant="success"
          style={{ border: "none" }}
          onClick={() => props.deleteTodo(props.rowNumber)}
        >
          COMPLETE
        </Button>
      </td>
    </tr>
  )
}

export default TodoRowItem
