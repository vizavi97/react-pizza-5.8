import React from 'react'
import {Header} from "../components/Header";
import NavbarAuth from "../components/NavbarAuth";


export const AuthLayout = props => {
  return (
  <>
      <Header children={<NavbarAuth/>}/>
      {props.children}
  </>
  )
}
