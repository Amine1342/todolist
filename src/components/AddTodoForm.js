import React, { useState } from "react";

const AddTodoForm = ({ addNewTodo }) => {
  const [addTodo, setAddTodo] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    addNewTodo(addTodo);
    setAddTodo(""); //vider le champ une fois le nouveau Todo enregistré
  };

  return (
    <form
      className="text-center container input-group-md"
      onSubmit={handleTodo}
    >
      <label className="text-success" style={{ marginRight: "5px" }}>
        <strong>Ajouter un To-do :</strong>
      </label>
      <input
        type="text"
        value={addTodo}
        style={{ marginRight: "3px", height: "32px" }}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <input
        className="btn btn-outline-primary"
        type="submit"
        value="Ajouter"
      />
    </form>
  );
};

export default AddTodoForm;
