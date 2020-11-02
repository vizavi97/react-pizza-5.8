import React, {useEffect} from 'react'
import {Box, Button, Flex, Image, Select} from "@chakra-ui/core";
import {Link} from "react-router-dom";
import emptyCart from '../assets/img/cart.png'
import cart from '../assets/img/shopping-cart.png'
import profile from '../assets/img/profile.png'
import {connect} from "react-redux";
import {getAllCurrencies, selectCurrency} from "../store/actions/currencyActions";
import {logout} from "../store/actions/userActions";

const Navbar = props => {
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
            <Box mx={4} w="40px">
                <Link to='/profile'>
                    <Image src={profile}/>
                </Link>
            </Box>
            <Box>
                <Button px={4} variantColor='teal' onClick={props.logout}>Logout</Button>
            </Box>
        </Flex>
    </Flex>
    )
}

export default connect(state => state, {getAllCurrencies, selectCurrency,logout})(Navbar)
