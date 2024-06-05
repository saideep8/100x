import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [selId, setSelId] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setSelId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setSelId(4);
        }}
      >
        4
      </button>
      <Todo id={selId}></Todo>
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async (res) => {
        console.log(res);
        console.log("Hello");

        setTodo(res.data.todo);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
