import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Flex, Box, Text, Spacer, Input, Image, Button } from "@chakra-ui/react"

import { useAuth } from "../../contexts/AuthContext"
interface UserCredentialProps {
  User: {
    user: string
  }
}
interface RegisterProps {
  email: string
  password: string
  username: string
}

export const Register = ({ setIsAuth }: any) => {

  const [registerInfo, setRegisterInfo] = useState<RegisterProps>({} as RegisterProps)

  const navigate = useNavigate()

  const { signUp } = useAuth()

  const handleChangeRegisterInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleRegisterUser = () => {
    const { email, password, username } = registerInfo
    try {
      signUp(email, password, username)
      localStorage.setItem("isAuth", 'true')
      setIsAuth(true)
      navigate('/tasks')
    } catch { }
  }

  return (
    <Flex h='100vh'>
      <Flex w='50%' bg='gray' align='center' justify='center'>
        <Box>
          <Image
            boxSize='500px'
            src='./ImageLogo.svg'
          />
        </Box>
      </Flex>

      <Spacer />

      <Flex w='50%' direction='column' align='center' gap='1.5rem' justify='center' bg='black'>

        <Box>
          <Text
            as='h1'
            color='white'
            fontWeight='black'
            fontSize='3xl'
            textAlign='center'
            lineHeight='2rem'
          >
            Create Your User
          </Text>
        </Box>

        <Flex direction='column' gap='0.5rem'>
          <Input
            name="email"
            value={registerInfo.email}
            type='text'
            color='brand.100'
            focusBorderColor='tomato'
            placeholder='Email'
            onChange={handleChangeRegisterInfo}
          />
          <Input
            name="username"
            value={registerInfo.username}
            type='text'
            color='brand.100'
            focusBorderColor='tomato'
            placeholder='Username'
            onChange={handleChangeRegisterInfo}
          />
          <Input
            name="password"
            value={registerInfo.password}
            type='password'
            color='brand.100'
            focusBorderColor='tomato'
            placeholder='Password'
            onChange={handleChangeRegisterInfo}
          />

          <Button onClick={handleRegisterUser} fontWeight='black'> Register </Button>
        </Flex>

        <Text as='span'>
          Already have an account? {''}
          <Text
            as='span'
            textDecoration='underline'
            cursor='pointer'
            color='purple'
            filter='auto'
            _hover={{ brightness: '100%' }}
          >
            <Link to='/'>
              Login here.
            </Link>
          </Text>
        </Text>
      </Flex>

    </Flex >
  )
}

