import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, Box, Text, Spacer, Input, Image, Button } from "@chakra-ui/react"


interface LoginProps {
  username: string
  password: string
}

export const Login = () => {

  const [userInfo, setUserInfo] = useState<LoginProps[]>([])

  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(userInfo)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
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

      <Flex w='50%' direction='column' align='center' gap='2rem' justify='center' bg='black'>

        <Box>
          <Text
            as='h1'
            color='white'
            fontWeight='black'
            fontSize='3xl'
            textAlign='center'
            lineHeight='2rem'
            mb='.3rem'
          >
            Manage Your <Text as='span' color='tomato'>Tasks</Text>
          </Text>

          <Text
            as='h1'
            color='white'
            fontWeight='black'
            fontSize='3xl'
            textAlign='center'
            lineHeight='2rem'
          >
            Manage Your <Text as='span' color='tomato'>Day</Text>
          </Text>
        </Box>

        <Flex direction='column' gap='0.5rem'>
          <Input
            name="username"
            type='text'
            focusBorderColor='tomato'
            placeholder='Username'
            onChange={handleChangeLoginInfo}
          />
          <Input
            name="password"
            type='password'
            focusBorderColor='tomato'
            placeholder='Password'
            onChange={handleChangeLoginInfo}
          />

          <Button fontWeight='black'> Login </Button>
        </Flex>

        <Text as='span'>
          Don't have account? {''}
          <Text
            as='span'
            textDecoration='underline'
            cursor='pointer'
            color='purple'
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

