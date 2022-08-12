// import { User } from 'firebase/auth'
import { useContext, useEffect, createContext, useState, ReactNode } from 'react';
import { auth } from '../services/FirebaseConfig'
import {
  Auth, onAuthStateChanged,
  signOut,
  User
} from "firebase/auth";
interface AuthValueProps {
  auth: Auth
  logout: () => Promise<void>
  currentUser: User
}
interface AuthProps {
  children: ReactNode
}

const AuthContext = createContext<AuthValueProps>({} as AuthValueProps)

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProps) => {

  // const [currentUser, setCurrentUser] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, user => {
  //     setLoading(false);
  //     setCurrentUser(user);
  //     console.log("Auth state changed");
  //   })
  //   return unsub;
  // }, []

  const [currentUser, setCurrentUser] = useState<any>();

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])

  const values = {
    currentUser,
    auth,
    logout
  }

  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>;
}