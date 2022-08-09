import { Flex, Box, Spacer, Input, Image, Button } from "@chakra-ui/react"

export const Login = () => {
  return (
    <Flex h='100vh'>
      <Flex w='50%' bg='gray' align='center' justify='center'>
        <Box>
          <Image
            boxSize='550px'
            src='./ImageLogo.svg'
          />
        </Box>
      </Flex>

      <Spacer />

      <Flex w='50%' align='center' justify='center' bg='black'>
        <Flex direction='column' gap='0.5rem'>
          <Input type='text' placeholder='Username' />
          <Input type='password' placeholder='Password' />

          <Button fontWeight='black'> Login </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

