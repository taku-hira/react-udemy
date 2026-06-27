import axios from 'axios'
import { useState } from 'react'
import { Todo } from './Todo'
import { Text } from './Text'
// import './App.css'
import type { TodoType } from './types/todo'
import  { UserProfile } from './UserProfile'
import type { User } from './types/user'

const user: User = {
  name: "村松",
  hobbies: ["野球","中日"]
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
      <Text color='red' fontSize='18px'/>
      <UserProfile user={user} />
    </>
  )
}

export default App
