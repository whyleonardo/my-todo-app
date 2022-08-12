import { Flex, Text } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'

export const NotFound = () => {
  return (
    <Flex h='100vh' align='center' flexDirection='column' justify='center' bg='brand.500'>
      <WarningTwoIcon fontSize='4rem' color='brand.200' />

      <Text as='h1' fontSize='4rem' fontWeight='black' color='brand.200'>
        Error 404
      </Text>

      <Text as='p' fontWeight='black' color='brand.200' > Ops! This page not exists...</Text>
    </Flex >

  )
}

