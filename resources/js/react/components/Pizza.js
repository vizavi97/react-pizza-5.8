import React from 'react'
import {Box, Button, Heading, Image, Text, useToast} from "@chakra-ui/core";
import {connect} from "react-redux";
import {addToBasket} from "../store/actions/basketActions";
import {BACKEND_URL} from "../config/config";

const Pizza = props => {
    const currency = props.currency.selectedCurrency
    const src = BACKEND_URL + props.src;
    const toast = useToast();
    const pizza = {
        id: props.id,
        name: props.name,
        desc: props.desc,
        src: props.src,
        prices: props.prices
    }
    function buttonHandler(e) {
        e.preventDefault()
        props.addToBasket(pizza)
        toast({
            title: `${props.name} - added to cart`,
            status: "success",
            position: 'top',
            duration: 2000,
            isClosable: true,
        })
    }
    return (
        <>
            <Box className='pizza'>
                <Box className='pizza-img'><Image src={src}/></Box>
                <Box className='pizza-name'><Heading as='h2' fontSize='xl'>{pizza.name}</Heading></Box>
                <Box className='pizza-desc'><Text fontSize='md'>{pizza.desc}</Text></Box>
                <Box className='pizza-cost'><Text fontSize='xl'>{(pizza.prices / currency.ratio).toFixed(2) + ' ' + currency.name }</Text></Box>
                <Box className='pizza-btn'>
                    <Button type='button' variantColor='orange' onClick={buttonHandler}>Purchase</Button>
                </Box>
            </Box>
        </>
    )
}

export default connect(state=>state,{addToBasket})(Pizza)
