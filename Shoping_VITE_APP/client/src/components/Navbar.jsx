import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      Welcome user
      <Link to="/cart" className='link-style'>View Cart</Link> | 
      <Link to="/order" className='link-style'>View Orders</Link> | 
      <Link to="/" className='link-style'>Home</Link> | 
      <Link to="/logout" className='link-style'>logout</Link> | 
    </div>
  )
}

export default Navbar