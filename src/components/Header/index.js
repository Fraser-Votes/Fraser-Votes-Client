import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import { IsMobile } from '../../utils/mediaQueries';

const Header = ({ title, description, admin }) => (
  <Box
    mt={IsMobile() ? '46px' : admin ? '12px' : ''}
    h={description ? '98px' : '76px'}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    mb="4px"
  >
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color="blueGray.900"
    >
      {title}
    </Text>
    <Text
      fontSize="16px"
      fontWeight="600"
      color="blueGray.500"
    >
      {description}
    </Text>
  </Box>
);

export default Header;
