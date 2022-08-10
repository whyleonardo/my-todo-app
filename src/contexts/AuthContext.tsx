// import { User } from 'firebase/auth'
import { useContext, useEffect, createContext, useState } from 'react';
import { auth } from '../services/FirebaseConfig'
import {
  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User
} from "firebase/auth";
import { } from 'react'
import { useNavigate } from 'react-router-dom';


interface AuthProps {
  signUp: (email: string, password: string, username: string) => void
  // login: ({ email: string, password: string }) => void
  logout: () => Promise<void>
  currentUser: User
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {


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

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])

  const signUp = async (email: string, password: string, username: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)

      await updateProfile(auth.currentUser as User, { displayName: username })

    } catch (err) { console.log(err) }
  }

  // function login(email: string, password: string) {
  //   return signInWithEmailAndPassword(auth, email, password);
  // }

  function logout() {
    return signOut(auth);
  }

  const values = {
    currentUser,
    signUp,
    // login,
    logout
  }

  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>;
}