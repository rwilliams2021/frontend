import { Divider, FormControl, FormControlLabel, Grid, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Radio } from '@mui/material'; // Correct import for Radio

const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
];

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" }
];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [foodCategory, setFoodCategory] = useState("");

    const handleFoodTypeChange = (e) => {
        setFoodType(e.target.value);
    };

    const handleFoodCategoryChange = (e) => {
        setFoodCategory(e.target.value);
    };

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
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28 d'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component='fieldset'>
                                <RadioGroup onChange={handleFoodTypeChange} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />} // Correct usage of Radio component
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component='fieldset'>
                                <RadioGroup onChange={handleFoodCategoryChange} name="food_category" value={foodCategory}>
                                    {categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio />} // Correct usage of Radio component
                                            label={item}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] filter'>
                    Menu
                </div>
            </section>
        </div>
    );
}

export default RestaurantDetails;
