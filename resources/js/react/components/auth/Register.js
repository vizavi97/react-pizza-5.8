import React, {useState} from 'react'
import {Button, Flex, FormControl, FormLabel, Input, useToast} from "@chakra-ui/core";
import {inputValidator} from "../../utils/inputValidator";
import {registerFormValidator} from "../../utils/authFormValidator";
import {register} from "../../store/actions/userActions";
import {connect} from "react-redux";


const Register = props => {
    const toast = useToast();
    const [user,setUser] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        phoneNumber: '',
    })
    const inputHandler = event => {
        const value = inputValidator(event)
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const errors = registerFormValidator(user)
        if(errors) {
            return toast({
                position: "top",
                title: errors.field + " - " + errors.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
            })
        }
        props.register(user)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                  <Flex flexDirection='column'>
                    <FormControl p={4}>
                      <FormLabel htmlFor="email" mb={1}>Email:</FormLabel>
                      <Input type="text" name='email' id="email" placeholder='Email' value={user.email} onChange={inputHandler} />
                    </FormControl>
                    <FormControl p={4}>
                      <FormLabel htmlFor="name" mb={1}>Name:</FormLabel>
                      <Input type="text" name='name' id="name" placeholder='Name' value={user.name} onChange={inputHandler} />
                    </FormControl>
                    <FormControl p={4}>
                        <FormLabel htmlFor="surname" mb={1}>Surname:</FormLabel>
                    <Input type="text" name='surname' id="surname" placeholder='Surname' value={user.surname} onChange={inputHandler} />
                    </FormControl>
                    <FormControl p={4}>
                    <FormLabel htmlFor="phoneNumber" mb={1}>Phone number:</FormLabel>
                    <Input type="text" name='phoneNumber' id="phoneNumber" placeholder='Phone number' value={user.phoneNumber} onChange={inputHandler} />
                    </FormControl>
                    <FormControl p={4}>
                    <FormLabel htmlFor="password" mb={1}>Password:</FormLabel>
                    <Input type="password" name='password' id="password" placeholder='Password' value={user.password} onChange={inputHandler} />
                    </FormControl>
                  </Flex>
                  <Flex px={4} justifyContent='center'>
                    <Button type='submit' variantColor='teal'>Register</Button>
                  </Flex>
              </form>
          </>
    )
}

export default connect(null,{register})(Register)
