import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    const navigate = useNavigate()

    return (
            <ul className="navBar-block">
                <li className="navBar-item">
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li className="navBar-item">
                    My Trips
                </li>
                <li className="navBar-item">
                    New Trip
                </li>
                <li className="navBar-item">
                    Profile
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

