import React from "react";

import AddTodo from "./components/AddTodo";

import "./App.css";
import TodosList from "./components/Todos";

function App() {
  return (
    <>
      <h1>Learn About Redux Toolkit</h1>
      <AddTodo />
      <TodosList />
    </>
  );
}

export default App;
