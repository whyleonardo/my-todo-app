import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Flex, Box, Text, Spacer, Input, Image, Button, Icon } from "@chakra-ui/react"
import { CheckAnimation } from "../../animations/CheckAnimation"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../services/FirebaseConfig"


interface LoginProps {
  email: string
  password: string
}

export const Login = () => {

  const [userInfo, setUserInfo] = useState<LoginProps>({
    email: '',
    password: ''

  })


  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(userInfo)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }
  const navigate = useNavigate()

  const handleLoginUser = async () => {
    const { email, password } = userInfo
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log('error')
    }
    setUserInfo({
      email: '',
      password: ''
    })
    navigate('/tasks')
  }



  return (
    <Flex h='100vh'>
      <Flex w='50%' bg='brand.400' align='center' justify='center'>
        <Box>
          <Image
            boxSize='500px'
            src='./ImageLogo.svg'
          />
        </Box>
      </Flex>

      <Spacer />

      <Flex w='50%' direction='column' align='center' gap='1rem' justify='center' bg='brand.500'>

        <Box>
          <Icon as={CheckAnimation} />
          <Text
            as='h1'
            color='white'
            fontWeight='black'
            fontSize='3xl'
            textAlign='center'
            lineHeight='2rem'
          >
            Manage Your <Text as='span' color='brand.200'>Tasks</Text>
          </Text>

          <Text
            as='h1'
            color='white'
            fontWeight='black'
            fontSize='3xl'
            textAlign='center'
            lineHeight='2rem'
          >
            Manage Your <Text as='span' color='brand.200'>Day</Text>
          </Text>
        </Box>

        <Flex direction='column' gap='0.5rem'>
          <Input
            name="email"
            type='text'
            focusBorderColor='brand.100'
            placeholder='Email'
            onChange={handleChangeLoginInfo}
          />
          <Input
            name="password"
            type='password'
            focusBorderColor='brand.100'
            placeholder='Password'
            onChange={handleChangeLoginInfo}
          />

          <Button onClick={handleLoginUser} fontWeight='black'> Login </Button>
        </Flex>

        <Text color='brand.100' as='span'>
          Don't have account? {''}
          <Text
            as='span'
            textDecoration='underline'
            cursor='pointer'
            color='brand.300'
            filter='auto'
            _hover={{ brightness: '100%' }}
          >
            <Link to='/register'>
              Register here.
            </Link>
          </Text>
        </Text>
      </Flex>


    </Flex >
  )
}

