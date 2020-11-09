import React,{useState} from 'react'
import {Box, Grid, Flex, Button, Heading, Image, Text, Icon, ListItem,Input} from "@chakra-ui/core";
import {connect} from "react-redux";
import {incrementItemInBasket, removeToBasket, decrementItemInBasket} from "../../store/actions/basketActions";
import {BACKEND_URL} from "../../config/config";

const BasketItem = props => {
    const [count,setCount] = useState(props.count)
    const currency = props.currency.selectedCurrency
    const src = BACKEND_URL + '/' + props.src;
    function buttonHandler(e) {
        e.preventDefault()
        props.removeToBasket(props.id)
    }
    function incrementHandler() {
        if (count < 10) {
            props.incrementItemInBasket(props.basket.pizzasInBasket,props.id)
            setCount(count + 1)
        }
    }
    function decrementHandler() {
        if (count > 1) {
            props.decrementItemInBasket(props.basket.pizzasInBasket, props.id)
            setCount(count - 1)
        }
    }
    return (
        <ListItem className='basket-item'>
            <Grid className='basket-item-container' gap={6}>
                <Box className='basket-item-img'><Image src={src} /></Box>
                <Box className='basket-item-name'><Heading as='h2' fontSize='xl'>{props.name}</Heading></Box>
                <Box className='basket-item-cost'><Text fontSize='xl'>{(props.prices / currency.ratio * props.count).toFixed(2) + ' ' + currency.name }</Text></Box>
                <Flex className='basket-item-count'>
                    <Button onClick={decrementHandler}>-</Button>
                    <Input min={1} max={10} isReadOnly value={count}/>
                    <Button onClick={incrementHandler}>+</Button>
                </Flex>
                <Box className='basket-item-btn'>
                    <Button type='button' variant='ghost' variantColor='red' onClick={buttonHandler}>
                         <Icon name='delete'/>
                    </Button>
                </Box>
            </Grid>
        </ListItem>
    )
}

export default connect(state=>state,{removeToBasket,incrementItemInBasket,decrementItemInBasket})(BasketItem)
