import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RegisterInfoProps } from './../../pages/Register/index';

interface RegisterInputProps {
  handleRegisterUser: () => void
  handleChangeRegisterInfo: (e: React.ChangeEvent<HTMLInputElement>) => void
  registerInfo: RegisterInfoProps
}

export const RegisterInput = ({ handleRegisterUser, handleChangeRegisterInfo, registerInfo }: RegisterInputProps) => {
  return (
    <Flex w={{ base: '100%', md: '50%' }} direction='column' align='center' gap='1.5rem' justify='center' bg='brand.500'>
      <Box>
        <Text
          as='h1'
          color='white'
          fontWeight='black'
          fontSize='3xl'
          textAlign='center'
          lineHeight='2rem'
        >
          Create Your <Text as='span' color='brand.200'> User</Text>
        </Text>
      </Box>

      <Flex direction='column' gap='0.5rem'>
        <Input
          name="email"
          value={registerInfo.email}
          type='text'
          color='brand.100'
          focusBorderColor='brand.400'
          placeholder='Email'
          onChange={handleChangeRegisterInfo}
        />
        <Input
          name="username"
          value={registerInfo.username}
          type='text'
          color='brand.100'
          focusBorderColor='brand.400'
          placeholder='Username'
          onChange={handleChangeRegisterInfo}
        />
        <Input
          name="password"
          value={registerInfo.password}
          type='password'
          color='brand.100'
          focusBorderColor='brand.400'
          placeholder='Password'
          onChange={handleChangeRegisterInfo}
        />

        <Button
          onClick={handleRegisterUser}
          fontWeight='black'
        >
          Register
        </Button>
      </Flex>

      <Text color='brand.100' as='span'>
        Already have an account? {''}
        <Text
          as='span'
          textDecoration='underline'
          cursor='pointer'
          color='brand.300'
          filter='auto'
          _hover={{ brightness: '100%' }}
        >
          <Link to='/'>
            Login here.
          </Link>
        </Text>
      </Text>
    </Flex>
  )
}

