import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { MainMenu } from "./MainMenus"
import { ProfileMenu } from "./ProfileMenu"


export default function NavBar({ setWorkingTripId, setWorkingTripDates }) {

    return (
        <Box sx={{
                flexGrow: 1,
                margin: 2
                }}
        >
            <AppBar position="static" color="" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow:3
                            }}
                        >
                            BASECAMP-PLANNER
                        </Typography>
                        <MainMenu 
                            setWorkingTripId={setWorkingTripId}
                            setWorkingTripDates={setWorkingTripDates}
                        />
                        <ProfileMenu />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

