import { Flex, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaMoon, FaSun } from "react-icons/fa";

export const SwitcherThemeMode = () => {

  const { toggleColorMode } = useColorMode();
  const switchIcon = useColorModeValue(FaSun, FaMoon);
  const iconColor = useColorModeValue('brand.100', 'brand.100')


  return (
    <button
      onClick={() => toggleColorMode()}
    >
      <Icon
        pos='absolute'
        top='5'
        right='5'
        w={6}
        h={6}
        color={iconColor}
        _hover={{ color: 'brand.300' }}
        as={switchIcon} />
    </button>
  )
}
