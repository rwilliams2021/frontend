import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Chip, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    return (
        <div className='px-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover'
                    src='https://cdn.pixabay.com/photo/2016/07/22/05/07/delicious-1534207_640.jpg' alt=''
                />
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>biryani</p>

                        <div className="flex justify-between items-center">
                            <div className='flex items-center space-x-1'>
                                <IconButton>
                                    <RemoveCircleOutline />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutline />
                                </IconButton>
                            </div>
                        </div>
                        <p>€8.99</p>
                    </div>
                </div>
                <div className='pt-3 space-x-2'>
                    {[1,1,1].map((item)=><Chip label="Bread"/>)}

                </div>
            </div>
        </div>
    )
}

export default CartItem
