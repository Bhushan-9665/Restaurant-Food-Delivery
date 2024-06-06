import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
const EventCard = () => {
  return (
    <div>
      <Card className='w-[18rem] mt-10'>
        <CardMedia 
        sx={{height:345}}
        image='https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=600'/>

        <CardContent>
          <Typography variant='h5'>Indian Fast Food</Typography>
          <Typography variant='body2'>50% Off On Your First Order</Typography>
          <div className='py2'>
              <p>Mumbai</p>
              <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
              <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
          </div>
        </CardContent>

        { false &&<CardActionArea>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActionArea>}
      </Card>
    </div>
  )
}

export default EventCard
