import React from 'react'
import {connect} from "react-redux";
import OrderItem from "./OrderItem";
import {Flex, Heading, List} from "@chakra-ui/core";
import {Loader} from "../ui/Loader";

const Orders = props => {
    const orderArr = props.order.orders;
    return (
         <Flex className={'container'}>
            {props.order.ordersLoader ?
                <Flex flexDirection='column' justifyContent='center' alignItems='center'><Loader /></Flex> :
                <Flex flexDirection='column' pt={4} w={'100%'}>
              {orderArr.length ?
                  <>
                      <Heading textAlign='center' pb={4} pt={2} color='red.300'>History of orders!</Heading>
                      <List className='basket-items'>
                          {orderArr.filter(e => e != null).map((order,index) =>
                              <OrderItem
                                      key={index}
                                      pizzasInOrder={order.pizzas}
                                      status={order.status}
                                      name={order.info.name}
                                      surname={order.info.surname}
                                      address={order.info.address}
                                      number={order.info.phoneNumber}
                                      amount={order.amount}
                                      time={order.created_at}
                              />)}
                      </List>
                  </> :
                  <Flex flex='auto' justifyContent='center' alignItems='center'><Heading color='red.500' size='lg'>"Your don't have orders"</Heading></Flex>
              }
             </Flex>
            }
        </Flex>
    )
}


export default connect(state => state, null)(Orders)
