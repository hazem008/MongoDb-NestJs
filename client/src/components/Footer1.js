import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer1 = () => {
  return (
    <Box
      textAlign="center"
      p={'5'}
      mt={'20'} // Modifiez mt={'20'} pour mt={20}
      bg="gray.100"
      color="black"
      w="100%"
      bottom={0}
      fontFamily="Arial, sans-serif"

    >
      <Text fontSize="medium" >
        &copy; 2023 Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer1;
