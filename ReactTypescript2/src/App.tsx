import axios from 'axios'
import { useState } from 'react'
import { Todo } from './Todo'
// import './App.css'

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
}

function App() {

  const [todos, setTodos] = useState<Array<TodoType>>([])
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      res.data.map((todo) => todo.title)
      setTodos(res.data);
    })
  }
  return (
    <>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </>
  )
}

export default App
