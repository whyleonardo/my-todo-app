import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Flex, useToast, Show, Hide } from "@chakra-ui/react"

import { signInWithEmailAndPassword } from "firebase/auth"
import { LoginInput } from './../../components/LoginInput/index';
import { ImageBackground } from "../../components/ImageBackground"

export interface LoginProps {
  email: string
  password: string
}


export const Login = ({ setIsAuth }: any) => {

  const [userInfo, setUserInfo] = useState<LoginProps>({} as LoginProps)

  const navigate = useNavigate()

  const toast = useToast({
    title: 'Error',
    position: 'top-right',
    status: 'error',
    duration: 5000,
    isClosable: true,
  })

  const { auth } = useAuth()

  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginUser = async () => {
    const { email, password } = userInfo
    try {
      await signInWithEmailAndPassword(auth, email, password)

    } catch (err) {
      err.code == "auth/missing-email" && toast({ description: 'Missing Email' })
      err.code == "auth/invalid-email" && toast({ description: 'Invalid Email' })
      err.code == "auth/wrong-password" && toast({ description: 'Wrong Password' })

      setUserInfo({
        email: '',
        password: ''
      })

      return
    }
    localStorage.setItem("isAuth", 'true')
    setIsAuth(true)
    navigate('/tasks')
  }


  return (
    <Flex h='100vh'>

      <Show above='sm'>
        <ImageBackground src='./ImageLogo.svg' />
      </Show>

      <LoginInput
        handleChangeLoginInfo={handleChangeLoginInfo}
        handleLoginUser={handleLoginUser}
        userInfo={userInfo}
      />
    </Flex >
  )
}

