import { SetStateAction, useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Flex, Show, useToast } from "@chakra-ui/react"
import { createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth"
import { RegisterInput } from "../../components/RegisterInput"
import { ImageBackground } from "../../components/ImageBackground"
import { Loading } from "../../components/Loading"
export interface RegisterInfoProps {
  email: string
  password: string
  username: string
}

interface RegisterProps {
  isAuth: string | null
  setIsAuth: React.Dispatch<React.SetStateAction<string | null>>
}

export const Register = ({ setIsAuth, isAuth }: RegisterProps) => {

  const [registerInfo, setRegisterInfo] = useState<RegisterInfoProps>({
    email: '',
    password: '',
    username: ''
  })

  const navigate = useNavigate()

  const { auth, currentUser } = useAuth()

  const toast = useToast({
    title: 'Error',
    position: 'top-right',
    status: 'error',
    duration: 5000,
    isClosable: true,
  })

  const handleChangeRegisterInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleRegisterUser = async () => {
    const { email, password, username } = registerInfo

    if (username == '') return toast({ description: 'Insert a username' })

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser as User, { displayName: username })

    } catch (err) {
      err.code == "auth/admin-restricted-operation" && toast({ description: 'Missing Email' })
      err.code == "auth/invalid-email" && toast({ description: 'Invalid Email' })
      err.code == "auth/weak-password" && toast({ description: 'Weak Password' })
      err.code == "auth/email-already-in-use" && toast({ description: ' Email Already in Use' })


      setRegisterInfo({
        email: '',
        password: '',
        username: ''
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
      {currentUser
        ? <Loading />
        :
        (
          <Flex h='100vh'>

            <Show above='sm'>
              <ImageBackground src='./ImageLogo2.svg' />
            </Show>

            <RegisterInput
              registerInfo={registerInfo}
              handleRegisterUser={handleRegisterUser}
              handleChangeRegisterInfo={handleChangeRegisterInfo}
            />
          </Flex >
        )
      }
    </>



  )
}

