import React from 'react';
import './Home.css';
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';

const restaurant=[1,1,1,1,1]
export const Home = () => {
    return (
        <div className=''>
            <section className='banner -z-50 relative flex flec-col justify-center items-center'>
                <div className='w-[50vw] z-109 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>My Food App</p>
                    <p className='z10 text-gray-300 text-xl lg:text-4xl'>Taste the convenience!</p>
                </div>
                <div className='cover absolute top-0 left-0 right-0'>

                </div>
                <div className='fade-out'>

                </div>
            </section>
            <section className='p-10 lg:py-10 lg:px-20'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
                <MultiItemCarousel />
            </section>
            <section className='px-5 lg:px-20'>
                <h1 className='text-2xl font-semibold text-gray-400 py-3'>
                    Order From Our Handpicked Favourites
                </h1>
                <div>
                    {
                        restaurant.map((item)=><RestaurantCard/>)
                    }
                </div>
            </section>
        </div>
    );
};