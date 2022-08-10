import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Tasks } from './pages/Tasks'
import { AuthProvider } from './contexts/AuthContext'

export const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register setIsAuth={setIsAuth} />} />
          <Route path='/tasks' element={<Tasks setIsAuth={setIsAuth} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}


