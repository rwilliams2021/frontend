import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavouriteIcon from '@mui/icons-material/Favorite';
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
    return (
        <Card className='w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img
                    className='w-full h-[10-rem] rounded-t-md object-cover'
                    src='https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_640.jpg'
                    alt=''
                />
                <Chip
                    size="small"
                    className='absolute top-2 left-2'
                    color={true ? "success" : "error"}
                    label={true ? "Open" : "Closed"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className="font-semibold text-lg">Indian Fast Food</p>
                    <p className='text-gray-500 text-sm'>
                        Craving it all? Dive into our global fla...
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavouriteIcon />:<FavouriteBorderIcon />}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}

export default RestaurantCard
