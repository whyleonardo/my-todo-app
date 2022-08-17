import { Button, Flex } from '@chakra-ui/react'
import { SwitcherThemeMode } from '../Switcher'

interface HeaderProps {
  signUserOut: () => void
}

export const Header = ({ signUserOut }: HeaderProps) => {
  return (
    <Flex w='100%' h='4rem' align='center' justify='end' gap={6} px='4rem' bg='brand.400'>
      <SwitcherThemeMode />
      <Button
        bg='brand.100'
        borderColor='brand.200'
        border={2}
        color='brand.400'
        filter='auto'
        _hover={{ brightness: '90%' }}
        onClick={signUserOut}
      >
        Logout
      </Button>

    </Flex>
  )
}

