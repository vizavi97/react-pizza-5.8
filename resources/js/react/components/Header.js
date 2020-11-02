import React from 'react'
import {Box, Flex} from "@chakra-ui/core";
import {Link} from "react-router-dom";

export const Header = props => {
  return (
  <>
      <Flex className='header' backgroundColor="orange.400" alignItems='center' justifyContent='space-between' py={2} px={10}>
          <Box><Link to='/'>REACT-PIZZA</Link></Box>
          <Box>
              {props.children}
          </Box>
      </Flex>
  </>
  )
}
