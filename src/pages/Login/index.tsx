import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Flex, useToast, Show } from "@chakra-ui/react"

import { signInWithEmailAndPassword } from "firebase/auth"
import { LoginInput } from './../../components/LoginInput/index';
import { ImageBackground } from "../../components/ImageBackground"



export interface LoginInfoProps {
  email: string
  password: string
}

interface LoginProps {
  isAuth: string | null
  setIsAuth: React.Dispatch<React.SetStateAction<string | null>>
}

export const Login = ({ setIsAuth, isAuth }: LoginProps) => {

  const [userInfo, setUserInfo] = useState<LoginInfoProps>({} as LoginInfoProps)

  const navigate = useNavigate()

  const toast = useToast({
    title: 'Error',
    position: 'top-right',
    status: 'error',
    duration: 5000,
    isClosable: true,
  })

  const { auth, currentUser } = useAuth()

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
    setIsAuth('true')
    navigate('/tasks')
  }

  useEffect(() => {
    isAuth == 'true' && navigate('/tasks')
  }, [])

  return (
    <>
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
    </>
  )
}

