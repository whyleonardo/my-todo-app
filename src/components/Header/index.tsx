import { Button, Flex } from '@chakra-ui/react'

interface HeaderProps {
  signUserOut: () => void
}

export const Header = ({ signUserOut }: HeaderProps) => {
  return (
    <Flex w='100%%' h='4rem' align='center' justify='space-between' px='4rem' bg='brand.400'>
      <Button
        onClick={signUserOut}
      >
        Logout
      </Button>
    </Flex>
  )
}

