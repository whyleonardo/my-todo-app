import { Box, Button, Flex, Icon, Input, Text, useColorModeValue, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { CheckAnimation } from "../../animations/CheckAnimation"
import { LoginInfoProps } from "../../pages/Login"
interface LoginInputProps {
  handleChangeLoginInfo: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleLoginUser: () => void
  userInfo: LoginInfoProps
}

export const LoginInput = ({ handleChangeLoginInfo, handleLoginUser, userInfo }: LoginInputProps) => {

  const inputColor = useColorModeValue('brand.100', 'brand.100')

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
          borderColor={inputColor}
          placeholder='Email'
          onChange={handleChangeLoginInfo}
        />
        <Input
          name="password"
          type='password'
          value={userInfo.password}
          focusBorderColor='brand.400'
          color='brand.100'
          borderColor={inputColor}
          placeholder='Password'
          onChange={handleChangeLoginInfo}
        />

        <Button
          onClick={handleLoginUser}
          fontWeight='black'
          bg={inputColor}
          color='brand.500'
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

