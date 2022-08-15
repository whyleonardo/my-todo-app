import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Tasks } from './pages/Tasks'
import { AuthProvider } from './contexts/AuthContext'
import { NotFound } from './pages/NotFound'
import { DatabaseProvider } from './contexts/DatabaseContext'

export const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <AuthProvider>
      {/* <DatabaseProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route path='/register' element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route path='/tasks' element={<Tasks setIsAuth={setIsAuth} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </DatabaseProvider> */}

    </AuthProvider>

  )
}


