import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
const Footer = () => {
  return (
    <Box
      textAlign="center"
      p={5}
      mt={'auto'}
      bg="gray.900"
      color="white"
      w="100%"
      bottom={0}
      fontFamily="Arial, sans-serif"
    >
      <Text fontSize="medium">&copy; 2023 Your Company. All rights reserved.</Text>
    </Box>
  )
}
export default Footer;