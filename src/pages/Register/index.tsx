import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, Box, Text, Spacer, Input, Image, Button } from "@chakra-ui/react"
interface RegisterProps {
  username: string
  password: string
}

export const Register = () => {

  const [userInfo, setUserInfo] = useState<RegisterProps[]>([])

  const handleChangeRegisterInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            name="username"
            type='text'
            focusBorderColor='tomato'
            placeholder='Username'
            onChange={handleChangeRegisterInfo}
          />
          <Input
            name="password"
            type='password'
            focusBorderColor='tomato'
            placeholder='Password'
            onChange={handleChangeRegisterInfo}

          />

          <Button fontWeight='black'> Register </Button>
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

