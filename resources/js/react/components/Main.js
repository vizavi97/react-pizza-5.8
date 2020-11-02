import React, {useEffect} from 'react'
import {Flex,Box} from "@chakra-ui/core";
import {connect} from "react-redux";
import {getAllPizzas} from "../store/actions/pizzaActions";
import Pizza from "./Pizza";
import {Loader} from "./ui/Loader";

const Main = props => {
  const pizza = props.pizzas
  useEffect(() => {
      if (!pizza.pizzas.length) {
          props.getAllPizzas()
      }
  },[])
  return (
  <>
    <Flex className='container'>
      <Flex className="row" justifyContent='center' pt={2} w='100%'>
      {pizza.loader ? <Loader/> : null}
      {pizza.pizzas.length > 0 ? pizza.pizzas.map(e => {
        return <Box className='col-3' mb={4} key={e.id}>
          <Pizza id={e.id} name={e.name} src={e.img} desc={e.desc} prices={e.prices} />
        </Box>
      }) : null}
      </Flex>
    </Flex>
  </>
  )
}

export default connect(state=>state,{getAllPizzas})(Main)
