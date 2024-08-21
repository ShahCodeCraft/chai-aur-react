import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoApp from "./SimpleTodo/SimpleTodo.jsx";
import TodoList from "./Practice/TodoList.jsx";
import DigitalClock from "./Practice/StopWatch.jsx";
import CrudApp from "./Practice/CrudOperation.jsx";
import Login from "./components/login/Login.jsx";
// import Demo from "./Practice/Demo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoApp /> */}
    {/* <TodoList /> */}
    {/* <DigitalClock /> */}
    {/* <CrudApp /> */}
    {/* <Demo /> */}
    <Login />
  </React.StrictMode>
);
