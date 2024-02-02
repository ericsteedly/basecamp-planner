import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export default function NavBar({ setWorkingTripId, setWorkingTripDates }) {
    const navigate = useNavigate()
    const resetDates = {
        startDate: 0,
        endDate:0
    }

    return (
            <ul className="navBar-block">
                <li className="navBar-item">
                    <Link to="/" onClick={()=>{setWorkingTripId(0); setWorkingTripDates(resetDates)}}>
                        Home
                    </Link>
                </li>
                <li className="navBar-item">
                    <Link to="/myTrips" onClick={()=>{setWorkingTripId(0); setWorkingTripDates(resetDates)}}>
                        My Trips
                    </Link>
                </li>
                <li className="navBar-item">
                    <Link to="/newTrip">
                        New Trip
                    </Link>
                </li>
                <li className="navBar-item">
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>
                {localStorage.getItem("baseCamp-user") && 
                    <li className="navBar-item">
                        <Link 
                            to="" 
                            className="navBar-logout"
                            onClick={() => {
                                localStorage.removeItem("baseCamp-user")
                                navigate("/")
                            }}
                        >
                        Log Out
                        </Link>
                    </li>
                }
            </ul>
    )
}

