import React from 'react'
import RestorentCard from '../../../pages/HomePage/RestorentCard'
import { Restorant } from '../../../../Data/Restorant'


const Notification = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center '>Notification</h1>

      <div className='flex flex-wrap gap-3 justify-center'>
          {/* {[1,1,1].map((item)=> </>)} */}
          {Restorant.map((item, index)=> <RestorentCard key={index} {...item} />)}
          {/* check the restorentcard are how to build in video */}
      </div>
    </div>
  )
}

export default Notification
