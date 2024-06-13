import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useDebugValue, useEffect } from "react";
import { pink } from "@mui/material/colors";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { findCart } from "../State/Cart/Action";

/**
 * Renders a Navbar component with a heading "Navbar".
 *
 * @return {JSX.Element} The Navbar component.
 */
export const Navbar = () => {
    const { auth, cart } = useSelector(store => store)
    const jwt = localStorage.getItem("jwt")
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findCart(jwt))
    }, [jwt])

    const handleAvatarClick = () => {
        if (auth.user?.role === "CUSTOMER") {
            navigate("/my-profile")
        } else if (auth.user?.role === "RESTAURANT_OWNER") {
            navigate("/admin/restaurant")
        } else {
            throw new Error("Invalid user role")
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
                        auth.user ?
                            (
                                <Avatar style={{ cursor: "pointer" }} onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullname[0].toUpperCase()}</Avatar>
                            )
                            :
                            (
                                <IconButton onClick={() => navigate("/account/login")}>
                                    <Person />
                                </IconButton>
                            )
                    }
                </div>
                <div>
                    <IconButton onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
                        <Badge color='primary' badgeContent={cart.cart?.items.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    );
};
