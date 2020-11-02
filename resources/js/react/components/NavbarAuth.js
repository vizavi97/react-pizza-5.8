import React, {useEffect} from 'react'
import {Box, Button, Flex, Image, Select} from "@chakra-ui/core";
import {Link} from "react-router-dom";
import emptyCart from '../assets/img/cart.png'
import cart from '../assets/img/shopping-cart.png'
import {connect} from "react-redux";
import {getAllCurrencies, selectCurrency} from "../store/actions/currencyActions";

const NavbarAuth = props => {
    useEffect(() => props.getAllCurrencies(), [])
    const selectEventHandler = event => {
        const checkedCurrency = props.currency.currencies.filter(e => e.name === event.target.value)[0]
        props.selectCurrency(checkedCurrency)
    }
    return (
    <Flex alignItems='center'>
      <Select size="sm" onChange={selectEventHandler} value={props.currency.selectedCurrency.name}>
          {props.currency.currencies.map(e => {
              return (
                    <option key={e.id} value={e.name}>{e.name}</option>
                  )
          })}
      </Select>
        <Flex alignItems='center'>
           <Box mx={4} w="40px" className='basket-link'>
                <Link to='/basket'>
                    <Image src={props.basket.pizzasInBasket.length > 0 ? cart : emptyCart} /> {props.basket.pizzasInBasket.length > 0 ?
                    <Box className='basket-rec' backgroundColor='red.400' color='white'>{props.basket.pizzasInBasket.length}</Box>
                    : null}
                </Link>
            </Box>
            <Box>
                <Link to='/login'>
                    <Button px={4} variantColor='teal'>Login</Button>
                </Link>
            </Box>
        </Flex>
    </Flex>
    )
}

export default connect(state => state, {getAllCurrencies,selectCurrency})(NavbarAuth)


