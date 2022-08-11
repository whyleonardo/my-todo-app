import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Tasks } from './pages/Tasks'
import { AuthProvider } from './contexts/AuthContext'
import { Loading } from './components/Loading/index';

export const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  // MAKE A HEADER WITHOUT LOGOUT BUTTON ON LOGIN AND REGISTER PAGES, BUT ON TASK PAGES

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/register' element={<Register setIsAuth={setIsAuth} />} />
          <Route path='/tasks' element={<Tasks setIsAuth={setIsAuth} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}


