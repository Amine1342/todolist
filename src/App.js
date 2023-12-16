import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/header";
import Todo from "./components/Todo";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Todo />
      </div>
    </div>
  );
}

export default App;
