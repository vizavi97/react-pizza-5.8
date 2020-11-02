import React from 'react'
import {Header} from "../components/Header";
import Navbar from "../components/Navbar";


export const MainLayout = props => {
  return (
  <>
      <Header children={<Navbar/>}/>
      {props.children}
  </>
  )
}
