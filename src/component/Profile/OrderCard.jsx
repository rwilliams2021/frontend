import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src='https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_640.jpg' 
                alt='' 
                />
                <div>
                    <p>Biryani</p>
                    <p>Price: $3.99</p>
                </div>
            </div>
            <div>
                <Button className='cursor-not-allowed'>Completed</Button>
            </div>
        </Card>
    )
}

export default OrderCard
