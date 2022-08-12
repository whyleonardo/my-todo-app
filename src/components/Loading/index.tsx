import { Flex, Spinner } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Flex h='100vh' align='center' justify='center' bg='brand.500'>
      <Spinner w='80px' h='80px' color='brand.200' />
    </Flex>

  )
}