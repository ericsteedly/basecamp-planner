import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService"
import "./Profile.css"
import { Link } from "react-router-dom"

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
                <h1>Profile</h1>
                <div className="profile-item">
                    {userObj?.firstName} {userObj.lastName}
                </div>
                <div className="profile-item">
                    {userObj.state?.name}
                </div>              
                <div className="profile-item">
                {userObj?.email}
                </div>
                <div className="editProfile-btn-container">
                    <Link to="/editProfile">
                        <button>Edit Profile</button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

