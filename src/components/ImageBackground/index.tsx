import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'


interface ImageBackground {
  src: string
}

export const ImageBackground = ({ src }: ImageBackground) => {
  return (
    <Flex w='50%' bg='brand.400' align='center' justify='center'>
      <Box>
        <Image
          boxSize='500px'
          src={src}
        />
      </Box>
    </Flex>
  )
}

