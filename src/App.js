import React from 'react';
import  './index.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import data  from './data';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Destinations from './components/destinations/Destinations';
import Hotels from './components/hotels/Hotels';
import Contact from './components/contact/Contact';
import Register from './components/register/Register';
import Signin from './components/signin/Signin';

const App = () => {
    
  return (
    <BrowserRouter>
    <section className="app">



<Navbar />

  <Routes>
<Route path='/' element={<Home /> }  />
<Route path='/destination' element={<Destinations /> }  />
<Route path='/hotel' element={<Hotels />}  />
<Route path='/contact' element={<Contact />}  />
<Route path='/register' element={<Register />}  />
<Route path='/signin' element={<Signin />}  />

  </Routes>
    </section>
  

   </BrowserRouter>
  )
}

export default App