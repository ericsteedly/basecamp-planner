import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Link from '@mui/material/Link';

export const MainMenu = ({ setWorkingTripId, setWorkingTripDates}) => {

    const resetDates = {
        startDate: 0,
        endDate:0
    }

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
                id="menu-btn"
                aria-haspopup="true"
                aria-controls={open ? 'main-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuSharpIcon sx={{ fontSize: 35}} />
            </IconButton>
            <Menu
                id="main-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-btn'
                }}
            >
                <MenuItem onClick={handleClose} >
                    <Link
                        href="/" 
                        underline="none"
                        color="inherit"
                        onClick={()=>{setWorkingTripId(0); setWorkingTripDates(resetDates)}}
                    >
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} >
                    <Link
                        href="/myTrips" 
                        underline="none"
                        color="inherit"
                        onClick={()=>{setWorkingTripId(0); setWorkingTripDates(resetDates)}}
                    >
                        My Trips
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} >
                    <Link
                        href="/newTrip" 
                        underline="none"
                        color="inherit"
                    >
                        New Trips
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    )
}

