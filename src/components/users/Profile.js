import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService"
import "./Profile.css"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export default function Profile({ currentUser }) {

    const [userObj, setUserObj] = useState({})

    useEffect(()=>{
        getUserById(currentUser.id).then((res)=>{
            setUserObj(res)
        })
    }, [currentUser])

    return (
        <div className="profile-main-container">
            <article className="profile-card">
                <h1 className="profile-header">Profile</h1>
                <div className="profile-details">
                    <div className="profile-item">
                        {userObj?.firstName} {userObj.lastName}
                    </div>
                    <div className="profile-item">
                        {userObj.state?.name}
                    </div>              
                    <div className="profile-item">
                    {userObj?.email}
                    </div>
                </div>
                <div className="editProfile-btn-container">
                    <Link to="/editProfile">
                        <Button
                        variant="contained"
                            sx={{
                                boxShadow: 3,
                                backgroundColor: '#8A8A8A',
                                color: 'white',
                                ":hover": {
                                    backgroundColor: '#A1A1A1',
                                    color: 'white'
                                }
                            }}
                        >
                        Edit Profile
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

