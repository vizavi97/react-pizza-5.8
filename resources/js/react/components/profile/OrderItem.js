import React from 'react'
import {Box, Grid, Heading, List, ListItem, Text} from "@chakra-ui/core";
import {connect} from "react-redux";


const OrderItem = props => {
    const currency = props.currency.selectedCurrency;
    const amount = (Number(props.amount) / currency.ratio).toFixed(2)
    const pizzaArr = props.pizzasInOrder;
    return (
        <ListItem className='order-item'>
            <Grid className='order-item-container' gap={6}>
                <Box className='order-item-list'>
                    <Heading>List of Pizzas</Heading>
                    <List>
                        {pizzaArr.map((e, i) => {
                            return (
                                <ListItem key={e.id}>{++i + " - " + e.name + "- count: " + e.count}</ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Box className='order-item-amount'>
                    <Heading>Amount</Heading>
                    <Text fontSize='xl'>{amount + " " + currency.name}</Text>
                </Box>
                <Box className='order-item-info'>
                    <Heading>Info</Heading>
                    <List className='order-item-info-properties'>
                        <ListItem className='order-item-info-property'>
                            <Heading as="h4" size="md">Client info:</Heading>
                            <Text fontSize='lg'>{props.name + ' ' + props.surname}</Text>
                        </ListItem>
                        <ListItem className='order-item-info-property'>
                            <Heading as="h4" size="md">Address:</Heading>
                            <Text fontSize='lg'>{props.address}</Text>
                        </ListItem>
                        <ListItem className='order-item-info-property'>
                            <Heading as="h4" size="md">Contact number:</Heading>
                            <Text fontSize='lg'>{props.number}</Text>
                        </ListItem>
                    </List>
                </Box>
                <Box className='order-item-status'>
                    <Heading>Status of order</Heading>
                    <Text fontSize='xl'>{props.status ? props.status : 'new'}</Text>
                </Box>
                <Box className='order-item-time'>
                    <Heading>Time of order creation</Heading>
                    <Text fontSize='xl'>{props.time}</Text>
                </Box>
            </Grid>
        </ListItem>
    )
}
export default connect(state => state, null)(OrderItem)
