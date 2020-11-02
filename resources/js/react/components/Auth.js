import React, {useState} from 'react'
import Box from "@chakra-ui/core/dist/Box";
import {Button, Flex, Heading} from "@chakra-ui/core";
import Login from "./auth/Login";
import Register from "./auth/Register";
import {connect} from "react-redux";
import {Loader} from "./ui/Loader";


const Auth = props => {
    const [loginTab, setLoginTab] = useState(true)
    return (
        <Flex className='container' justifyContent='center' alignItems='center'>
            {props.user.userLoader ? <Loader /> :

            <Box className='auth-form'>
            <Heading textAlign='center' size='lg'>{loginTab ? "Login" : "Register"}</Heading>
              <Flex justifyContent='center' alignItems='center' pt={4}>
                  <Button variantColor="teal" variant="outline" mx={2} isDisabled={loginTab} onClick={() => setLoginTab(true)}>Login</Button>
                  <Button variantColor="teal" variant="outline" mx={2} isDisabled={!loginTab} onClick={() => setLoginTab(false)}>Register</Button>
              </Flex> {loginTab ? <Login /> : <Register />}
            </Box>

            }

        </Flex>
    )
}

export default connect(state => state, null)(Auth)
