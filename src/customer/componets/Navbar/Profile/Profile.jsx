import React, { useState } from 'react'
import Profilenavigation from './Profilenavigation'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Orders from './Orders'
import Addrest from './Addrest'
import Foverite from './Foverite'
import Events from './Events'
import Payments from './Payments'
import Logout from './Logout'
import Notification from './Notification'

const Profile = () => {
  const [openSlider, setOpenSlider] = useState(false)
  return (
    <div className='lg:flex justify-between'>
        <div className='skicky h-[80] lg:w-[20%]'>
            
          <Profilenavigation open={openSlider}/>
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<UserProfile/>}/>
            <Route path='/order' element={<Orders/>}/>
            <Route path='/foverite' element={<Foverite/>}/>
            <Route path='/addrest' element={<Addrest/>}/>
            <Route path='/payments' element={<Payments/>}/>
            <Route path='/notification' element={<Notification/>}/>
            <Route path='/event' element={<Events/>}/>
            <Route path='/logout' element={<Logout/>}/>
            
          </Routes>
        </div>
      
    </div>
  )
}

export default Profile
