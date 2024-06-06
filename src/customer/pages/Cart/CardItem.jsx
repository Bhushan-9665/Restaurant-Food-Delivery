import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CardItem = () => {
    return (
        <div className='px-5'>
            <div className='lg:flex item-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src="https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=1TysI%2flq4qz5hw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFast-food-backgrounds-free-download.jpg&ehk=VN0hGMNRFLcAvvFfp4ePGsV38KfupnWKf0jLzqcaS90%3d&risl=&pid=ImgRaw&r=0" alt="Food" />
                </div>

                <div className='flex item-center justity-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>Pizza</p>

                        <div className='flex justify-between item-center'>
                            <div className='flex item-center space-x-1'>
                                <IconButton color='primary'>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>

                                <div className='w-5 h-5 text-xs'>5</div>

                                <IconButton color='primary'>
                                    <AddCircleOutlineIcon />
                                </IconButton>


                            </div>

                        </div>

                    </div>
                    <p>₹239</p>
                </div>

            </div>
                <div className='pt-3 space-x-3'>
                    {[1,1,1,1].map((item)=><Chip label="Veg" />)}
                </div>
        </div>
    )
}

export default CardItem
