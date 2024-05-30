import { Grid } from '@mui/material'
import React from 'react'
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const RestaurantDetails = () => {
    return (
        <div>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_640.jpg"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                    <p className='text-gray-500 mt-1'>
                        Craving it all? Dive into our global flavors and experience the taste of India!
                    </p>

                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationIcon />
                            <span>
                                Cape Town, South Africa
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarTodayIcon />
                            <span>
                                Mon-Fri: 9:00am - 11:00pm (Today)
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
