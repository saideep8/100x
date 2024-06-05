import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "first todo",
    completed: false
  },
  {
    title: "study DSA",
    description: "second todo",
    completed: false
  }
])

  return (
    <div>
        {todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })}
    </div>
  )
}

function Todo(props) {

    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
}

export default App
