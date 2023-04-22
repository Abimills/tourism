import React from 'react'
import './Navbar.css';
import {data} from '../../data.js';
import {links} from '../../data.js';
import { Link } from 'react-router-dom';
import {GoSearch} from 'react-icons/go'
const Navbar = () => {
  return (
   <section className="Navbar">
    <div className="logo">
        {data.map(item => {
            const {image,id,name} = item;

return <img src={image} alt={name} key={id} className="logo-img" />

        })}
        <h1 className="logo-name">V<span className='us-logo'>us</span></h1>
    </div>
    <div className="links">

   <Link to='/' className='link'>
         Home
   
    </Link>
   <Link to='/destination' className='link'>
         Destinations
   
    </Link>
   <Link to='/hotel' className='link'>
         Hotels
   
    </Link>
   <Link to='/contact' className='link'>
         Contact
   
    </Link>

    </div>
    <div className="search">
<GoSearch className='search-icon' />
    </div>
    <div className="text-navbar">
<Link to={'/register'} className='hello-text'>
Register
</Link>
<Link to={'/signin'} className='hello-text'>
Signin
</Link>
    </div>

   </section>
  )
}

export default Navbar