import React from 'react'
import Nav from '../Navbar/Nav'
import { Outlet } from 'react-router-dom'
interface IProps{

}
const Layout=({}:IProps)=> {
  return (
      <>
      <Nav/>
      <div className="container">
        <Outlet/>
      </div>
      
      </>
  )
}

export default Layout