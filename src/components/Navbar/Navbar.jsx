import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <h1>Great App</h1>
        <Link to='/'>Home</Link> | 
        <Link to='/fav'>Fav</Link>
    </>
  )
}

export default Navbar