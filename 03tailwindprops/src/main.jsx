import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Card1 from "./components/Card1.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Card1 name="Shah Class" content="React Program" />
    <Card1 name="Alam Class" content="Angular Program" /> */}
  </React.StrictMode>
);
