import React, {useState} from 'react'
import {Button, Flex, FormControl, FormLabel, Input, useToast} from "@chakra-ui/core";
import {inputValidator} from "../../utils/inputValidator";
import {loginFormValidator} from "../../utils/authFormValidator";
import {connect} from "react-redux";
import {login} from "../../store/actions/userActions";


const Login = props => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const toast = useToast();
    const inputHandler = event => {
        const value = inputValidator(event)
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const errors = loginFormValidator(user)
        if (errors) {
            return toast({
                position: "top",
                title: errors.field + " - " + errors.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
            })
        }
        props.login(user)
    }
    return (
        <form onSubmit={handleSubmit}>
              <Flex flexDirection='column'>
                    <FormControl p={4}>
                              <FormLabel htmlFor="email" mb={1}>Email</FormLabel>
                              <Input type="text" name='email' id="email" placeholder='Email' value={user.email} onChange={inputHandler} />
                    </FormControl>
                    <FormControl p={4}>
                      <FormLabel htmlFor="password" mb={1}>Password</FormLabel>
                      <Input type="password" name='password' id="password" placeholder='Password' value={user.password} onChange={inputHandler} />
                    </FormControl>
              </Flex>
              <Flex px={4} justifyContent='center'>
                <Button type='submit' variantColor='teal'>Login</Button>
              </Flex>
      </form>
    )
}
export default connect(null,{login})(Login)
