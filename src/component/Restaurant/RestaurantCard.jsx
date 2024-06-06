import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavouriteIcon from '@mui/icons-material/Favorite';
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isPresentInFavourites } from '../Config/logic';
import { addToFavourites } from '../State/Authentication/Action';

const RestaurantCard = ({item}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {auth} = useSelector(store=>store)
    const handleAddToFavourites = () => {
        dispatch(addToFavourites(jwt, item.id ));
    };
    return (
        <Card className='w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img
                    className='w-full h-[10-rem] rounded-t-md object-cover'
                    src={item.images[0]}
                    alt=''
                />
                <Chip
                    size="small"
                    className='absolute top-2 left-2'
                    color={item.open ? "success" : "error"}
                    label={item.open ? "Open" : "Closed"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className='text-gray-500 text-sm'>
                        {item.description}
                    </p>
                </div>
                <div>
                    <IconButton onClick={handleAddToFavourites}>
                        {isPresentInFavourites(auth.favourites, item)?<FavouriteIcon />:<FavouriteBorderIcon />}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}

export default RestaurantCard
