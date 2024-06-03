import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { pink } from "@mui/material/colors";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { useSelector } from "react-redux";

/**
 * Renders a Navbar component with a heading "Navbar".
 *
 * @return {JSX.Element} The Navbar component.
 */
export const Navbar = () => {
    const { auth } = useSelector(store => store)
    const navigate = useNavigate();
    const handleAvatarClick = () => {
        if(auth.user?.role === "CUSTOMER"){
            navigate("/my-profile")
        } else {
            navigate("/admin/restaurant")
        }
    }
    return (
        <Box sx={{ zIndex: 100 }} className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li onClick={() => navigate("/")} style={{ cursor: "pointer" }} className='logo font-semibold text-gray-300 text-2xl list-none'>
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
                    {
                        auth.user ? (
                            <Avatar style={{ cursor: "pointer" }} onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullname[0].toUpperCase()}</Avatar>)
                            :
                            (
                                <IconButton onClick={() => navigate("/account/login")}>
                                    <Person />
                                </IconButton>
                            )
                    }
                </div>
                <div>
                    <IconButton style={{ cursor: "pointer" }}>
                        <Badge color='primary' badgeContent={3}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    );
};
