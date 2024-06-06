import { Card, IconButton } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// RestorentCard
// RestaurantCard
const RestorentCard = (item, index) => {
    const Naviget = useNavigate();
  return (
    <Card className='m-5 w-[18rem] cursor-pointer' >
        
        <div onClick={() => Naviget(`/restorant/${item.city}/${item.name} /${item.id}`)}> 

            <img className='w-full h-[10rem]  rounded-t-md object-cover '
            src={item.imageUrl} alt="food " />
        </div>

        <div className=' p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg '> {item.name}</p>
                <p className='text-gray-500 text-sm'>
                    {item.description.length > 40 ? item.description.substring(0, 40) + "...": item.description}
                </p>
            </div>
            <div>
                <IconButton>
                    {true ? <FavoriteIcon color='primary'/> : <FavoriteBorderIcon /> }
                </IconButton>
            </div>
        </div>
    </Card>
  )
}

export default RestorentCard;

// import { useNavigate } from 'react-router-dom';
// {/* // onClick={() => Naviget(`/restorant/${item.city}${item.name} ${item.id}/`)} */}