import { IconButton, Link, Menu, MenuItem } from "@mui/material";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProfileMenu = () => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    

    return (
        <div>
            <IconButton
                id='profile-btn'
                aria-haspopup="true"
                aria-controls={open ? 'profile-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AccountBoxOutlinedIcon sx={{ fontSize: 35}} />
            </IconButton>
            <Menu
                id='profile-menu'
                anchorEl={anchorEl}
                open={open}
                onClick={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'profile-btn'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link 
                        href="profile"
                        underline='none'
                        color="inherit"
                    >
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        href="" 
                        underline='none'
                        color="inherit"
                        onClick={() => {
                            localStorage.removeItem("baseCamp-user")
                            navigate("/")
                        }}
                    >
                        Log Out
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    )
}



 