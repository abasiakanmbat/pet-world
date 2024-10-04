import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Components/shared/layout'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'
import NoPage from './pages/noPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>


      </div>

    </>
  )
}

export default App
