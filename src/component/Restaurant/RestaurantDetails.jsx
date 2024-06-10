import { Divider, FormControl, FormControlLabel, Grid, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Radio } from '@mui/material'; // Correct import for Radio
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantById, getRestaurantCategories } from '../State/Restaurant/Action';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-vegetarian", value: "non-vegetarian" },
    { label: "Seasonal", value: "seasonal" }
];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [foodCategory, setFoodCategory] = useState("all");

    const handleFoodTypeChange = (e) => {
        setFoodType(e.target.value);
    };

    const handleFoodCategoryChange = (e) => {
        setFoodCategory(e.target.value);
    };

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const { restaurant, menu } = useSelector(store => store)

    const { id } = useParams()

    console.log("Restaurant: ", restaurant)

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantCategories({ jwt, restaurantId: id }))

    }, [])

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt, restaurantId: id, 
            vegetarian: foodType==="vegetarian", 
            nonveg: foodType==="non-vegetarian", 
            seasonal: foodType==="seasonal", 
            foodCategory: foodCategory
        }))
    }, [foodType, foodCategory])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    
    const categories = restaurant.categories ? [{ id: 'all', name: 'All' }, ...restaurant.categories] : [{ id: 'all', name: 'All' }];

    return (
        <div>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        {restaurant.restaurant?.images.map((src, index) => (
                            <Grid item xs={12} lg={6} key={index}>
                                <img
                                    className='w-full h-[40vh] object-cover'
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>{restaurant.restaurant?.name}</h1>
                    <p className='text-gray-500 mt-1'>
                        {restaurant.restaurant?.description}
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
                                            key={item.id} // Assuming each category has a unique 'id'
                                            value={item.name.toLowerCase()} // Assuming you want to use the category name as the value
                                            control={<Radio />}
                                            label={capitalizeFirstLetter(item.name)}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>

                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] filter lg:pl-10'>
                    {menu.menuItems.map((item) => <MenuCard item={item} />)}
                </div>
            </section>
        </div>
    );
}

export default RestaurantDetails;
