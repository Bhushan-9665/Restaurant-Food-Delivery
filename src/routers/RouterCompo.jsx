import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CustumerRouter from './CustumerRouter'

const RouterCompo = () => {
  return (
    <Routes>
        <Route path='/*' element={<CustumerRouter/>}/>
    </Routes>
  )
}

export default RouterCompo
