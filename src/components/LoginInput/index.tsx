import { Box, Button, Flex, Icon, Input, Text, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { CheckAnimation } from "../../animations/CheckAnimation"
import { LoginProps } from "../../pages/Login"

interface LoginInputProps {
  handleChangeLoginInfo: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleLoginUser: () => void
  userInfo: LoginProps
}

export const LoginInput = ({ handleChangeLoginInfo, handleLoginUser, userInfo }: LoginInputProps) => {
  return (
    <Flex w={{ base: '100%', md: '50%' }} direction='column' align='center' gap='1rem' justify='center' bg='brand.500'>
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
          value={userInfo.email}
          focusBorderColor='brand.400'
          color='brand.100'
          placeholder='Email'
          onChange={handleChangeLoginInfo}
        />
        <Input
          name="password"
          type='password'
          value={userInfo.password}
          focusBorderColor='brand.400'
          color='brand.100'
          placeholder='Password'
          onChange={handleChangeLoginInfo}
        />

        <Button
          onClick={handleLoginUser}
          fontWeight='black'
        >
          Login
        </Button>
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

  )
}

