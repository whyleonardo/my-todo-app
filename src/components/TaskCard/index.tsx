import { Button, Circle, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { DocumentData } from 'firebase/firestore'
import { FaCheck, FaTrash } from 'react-icons/fa'

export const TaskCard = ({ title, description, isCompleted, handleCompleteTask, handleDeleteTask }: DocumentData) => {

  const themeColor = useColorModeValue('brand.400', 'brand.100')

  return (
    <Flex
      w='18rem' h='13rem' p='4' border='2px'
      justify='space-between'
      borderColor={themeColor}
      rounded='5px'
      flexDirection='column'
    >

      <Flex flexDirection='column' gap='2'>
        <Text
          color={themeColor}
          fontWeight='black'
          fontSize='1.4rem'
          textDecoration={isCompleted && 'line-through'}
          as='strong'
        >
          {title}
        </Text>

        <Text
          textDecoration={isCompleted && 'line-through'}
          fontSize='1rem'
          lineHeight='18px'
          color={themeColor}
          as='p'
        >
          {description}
        </Text>
      </Flex>


      <Flex align='center' gap='2' justify='end'>
        {
          !isCompleted
            ?
            <Button
              alignSelf='center'
              lineHeight='none'
              onClick={handleCompleteTask}
            >
              <Icon
                color={themeColor}
                as={FaCheck} />
            </Button>
            :
            <Circle
              size='20px'
              bg='green'
              p='4'
              filter='auto'
              _hover={{ brightness: '110%' }}
            >
              <Icon
                color='brand.100'
                as={FaCheck}
              />
            </Circle>
        }


        <Button
          onClick={handleDeleteTask}
        >
          <Icon
            color={themeColor}
            as={FaTrash} />
        </Button>

      </Flex>
    </Flex >
  )
}