import React, {useEffect} from 'react'
import {Flex, Heading, List, useToast} from "@chakra-ui/core";
import {arrayFilter} from "../../utils/arrayFilter";
import {connect} from "react-redux";
import BasketItem from "./BasketItem";
import BasketForm from "./BasketForm";
import {Loader} from "../ui/Loader";

const Basket = props => {
    const basketElements = props.basket.pizzasInBasket;
    const toast = useToast();
    const filteredBasket = arrayFilter(basketElements).map(arr => {
        arr[0]['count'] = arr.length;
        return arr[0];
    })
    useEffect(() => {
        if (props.order.showOrderToast) {
            toast({
                position: "top",
                title: props.order.ordersMessages,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        }
    }, [props.order.showOrderToast])

    return (
        <Flex className={'container'}>
            {props.order.ordersLoader ?
                <Flex flexDirection='column' justifyContent='center' alignItems='center'><Loader /></Flex> :
                <Flex flexDirection='column' pt={4} w={'100%'}>
              {filteredBasket.length ?
                  <>
                      <List className='basket-items'>
                            {filteredBasket.map(e => {
                                return (
                                    <BasketItem key={e.id} id={e.id} name={e.name} src={e.src} prices={e.prices} count={e.count} />
                                )
                            })}
                      </List>
                      <BasketForm basketArray={filteredBasket} />
                  </> :
                  <Flex flex='auto' justifyContent='center' alignItems='center'><Heading size='lg'>Your cart is empty</Heading></Flex>
              }
             </Flex>
            }
        </Flex>
    )
}

export default connect(state => state, null)(Basket)
