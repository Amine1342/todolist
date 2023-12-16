import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./AddTodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Modifier CV" },
    { id: 2, todo: "Postuler" },
    { id: 3, todo: "Préparer l'entretien" },
  ]);

  const [warning, setWarning] = useState(false);

  const addNewTodo = (newtodo) => {
    if (newtodo !== "") {
      warning && setWarning(false);
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          todo: newtodo,
        },
      ]);
    } else {
      setWarning(true);
    }
  };

  const warningMsg = warning && (
    <div className="d-flex justify-content-center align-items-center position-relative warning-container">
      <div
        className="alert alert-primary d-flex justify-content-center align-items-center mt-3"
        style={{ width: "50%" }}
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>Il faut remplir la case avant de valider</div>
      </div>
    </div>
  );

  return (
    <div className="list-group">
      {warningMsg}
      <h1 className="text-success text-center">
        {" "}
        {todos.length} To-do à faire
      </h1>
      <ul>
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <strong>{todo.todo}</strong>
          </li>
        ))}
      </ul>
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default Todo;
