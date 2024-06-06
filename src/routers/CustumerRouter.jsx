
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Restorant from '../customer/pages/Restorant/Restorant'
import Navbar from '../customer/componets/Navbar/Navbar'
import Cart from '../customer/pages/Cart/Cart'
import Profile from '../customer/componets/Navbar/Profile/Profile'
import Auth from '../customer/Auth/Auth'
const CustumerRouter = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/account/:register' element={<HomePage/>}/>
        <Route path='/restorant/:city/:title/:id' element={<Restorant/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile/>}/>
    </Routes>
    <Auth/>
    </div>
  )
}

export default CustumerRouter
