import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavouriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NotificationActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { AddReaction } from '@mui/icons-material';
import { Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';

const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favourites", icon: <FavouriteIcon /> },
    { title: "Address", icon: <AddReaction /> },
    { title: "Payments", icon: <AccountBalanceIcon /> },
    { title: "Notifications", icon: <NotificationActiveIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> }
]
const ProfileNavigation = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleNavigate = (item) => {
        if (item.title === "Logout") {
            dispatch(logout())
            navigate("/")
        } else
            navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                open={isSmallScreen ? open : true}
                onClose={handleClose}
                anchor="left"
                sx={{ zIndex: 1, position: 'sticky' }}>
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-start text-x1 
                        pt-24 gap-8'>
                    {menu.map((item, i) => <>
                        <div onClick={() => handleNavigate(item)} className='flex items-center px-5 space-x-5 cursor-pointer'>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {i !== menu.length - 1 && <hr />}
                    </>)}
                </div>

            </Drawer>
        </div>
    )
}

export default ProfileNavigation

