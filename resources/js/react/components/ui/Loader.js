import React from 'react'
import {Flex, Spinner} from "@chakra-ui/core";


export const Loader = () => {
  return (
      <Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
            <Spinner color="red.500" />
      </Flex>
  )
}
