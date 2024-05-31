import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { pink } from "@mui/material/colors";
import './Navbar.css';

/**
 * Renders a Navbar component with a heading "Navbar".
 *
 * @return {JSX.Element} The Navbar component.
 */
export const Navbar = () => {
    return (
        <Box sx={{ zIndex: 100 }} className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li className='logo font-semibold text-gray-300 text-2xl list-none'>
                    Restaurant Delivery
                </li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div>
                    <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>C</Avatar>
                </div>
                <div>
                    <IconButton>
                        <Badge color='primary' badgeContent={3}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    );
};
