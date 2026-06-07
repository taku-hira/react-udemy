import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { Page1 } from './Page1'
import { Page1Detail } from './Page1Detail'
import { Page2 } from './Page2'
// import { About } from './pages/About'
// import { Users, UserDetail } from './pages/Users'
// import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/users">Users</Link> */}
        <Link to="/">Home</Link>
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="detail" element={<Page1Detail />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
