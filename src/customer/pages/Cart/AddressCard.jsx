import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({handleSelectAddress, item, showButton}) => {
  return (
    <Card className='flex space-x-5 lg:w-64 m-5 p-5 rounded-md'>
      <HomeIcon/>
      <div className='text-gray-500 '>
        <h1 className='text-lg font-semibold text-white'>Home</h1>
        <p>New Sangavi Near Dinosore Gardon Pune</p>
        {showButton && <Button variant='outlined' fullWidth onClick={() =>handleSelectAddress(item)}>Select Address</Button>}
      </div>
    </Card>
  )
}

export default AddressCard
