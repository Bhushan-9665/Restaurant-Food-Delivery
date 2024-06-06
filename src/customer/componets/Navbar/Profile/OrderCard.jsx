import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex item-center space-x-5'>
            <img className='h-16 w-16 ' src="https://th.bing.com/th/id/R.99a429149891b8331ab9a4d9dcdeca89?rik=ZFGjK2aI0XNcog&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFresh-hot-delicious-food-wallpaper.jpg&ehk=YcpVrjnOnSm%2fhnTl3VFd3ve98wBRCKiyDEZj%2fJ43ix8%3d&risl=&pid=ImgRaw&r=0" alt="gfd" />
            <div>
                <p>Biryani</p>
                <p>₹200</p>

            </div>

        </div>
        <Button className='cursor-not-allowed'>Complited</Button>
      
    </Card>
  )
}

export default OrderCard
