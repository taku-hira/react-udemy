import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1user</button>
    </>
  )
}

export default App
