import { Flex, Text } from '@chakra-ui/react'
import { DocumentData } from 'firebase/firestore'

export const TaskCard = ({ title }: DocumentData) => {
  return (
    <Flex w='15rem' h='10rem' border='2px' borderColor='brand.400' rounded='5px'>
      <Text>{title}</Text>
    </Flex >
  )
}