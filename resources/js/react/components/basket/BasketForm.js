import React, {useState} from 'react'
import {connect} from "react-redux";
import {Input, FormControl, FormLabel, Button, Flex, Box, Text, useToast} from "@chakra-ui/core";
import {inputValidator} from "../../utils/inputValidator";
import {createOrder} from "../../store/actions/orderActions";
import {orderFormValidator} from "../../utils/orderFormValidator";


const BasketForm = props => {
    const toast = useToast();
    const [info, setInfo] = useState({
        name: props.user.user ? props.user.user.name : '',
        surname: props.user.user ? props.user.user.surname : '',
        phoneNumber: props.user.user ? props.user.user.phoneNumber : '',
        address: ''
    })
    const amount = props.basketArray.reduce((acc, elem) => {
        acc += elem.prices * elem.count
        return acc
    }, 0)
    const sum = (amount / props.currency.selectedCurrency.ratio).toFixed(2) + ' ' + props.currency.selectedCurrency.name
    const inputHandler = event => {
        const value = inputValidator(event)
        setInfo(prevState => ({
            ...prevState,
            [event.target.name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const errors = orderFormValidator(info)
        if(errors) {
            return toast({
                position: "top",
                title: errors.field + " - " + errors.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
            })
        }
        const data = {
            info,
            amount: amount.toFixed(2),
            pizzas: props.basketArray,
            user_id: props.user.user != null ? props.user.user.id : null
        }
        props.createOrder(data);
    }
    return (
        <Box className='basket-form'>
          <form onSubmit={handleSubmit}>
              <Flex>
                <FormControl p={4}>
                  <FormLabel htmlFor="name" mb={1}>Name</FormLabel>
                  <Input type="text" name='name' id="name" placeholder='Name' value={info.name} onChange={inputHandler} />
                </FormControl>
                <FormControl p={4}>
                  <FormLabel htmlFor="surname" mb={1}>Surname</FormLabel>
                  <Input type="text" name='surname' id="surname" placeholder='Surname' value={info.surname} onChange={inputHandler} />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p={4}>
                  <FormLabel htmlFor="address" mb={1}>Address</FormLabel>
                  <Input type="text" name='address' id="address" placeholder='Address' value={info.address} onChange={inputHandler} />
                </FormControl>
                <FormControl p={4}>
                  <FormLabel htmlFor="phoneNumber" mb={1}>Phone number</FormLabel>
                  <Input type="text" name='phoneNumber' id="phoneNumber" placeholder='Phone number' value={info.phoneNumber} onChange={inputHandler} />
                </FormControl>
              </Flex>
              <Flex px={4} alignItems='center'>
                <Flex>
                    <Text>total amount:</Text>
                    <Text pl={4}><strong>{sum}</strong></Text>
                </Flex>
                <Button type='submit' variantColor='teal'>Checkout</Button>
              </Flex>
          </form>
        </Box>
    )
}

export default connect(state => state, {createOrder})(BasketForm)
