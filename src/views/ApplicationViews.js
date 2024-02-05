import NavBar from "../components/navBar/NavBar";
import USA from "../components/maps/USA";
import { Outlet, Route, Routes } from "react-router-dom";
import NewTrip from "../components/trips.js/NewTrip";
import MyTrips from "../components/trips.js/MyTrips";
import Profile from "../components/users/Profile";
import { useEffect, useState } from "react";
import StateView from "../components/maps/utility/StateView";
import EditProfile from "../components/users/EditProfile";

export default function ApplicationViews() {
    const [currentUser, setCurrentUser] = useState({})
    const [workingTripId, setWorkingTripId] = useState(0)
    const [workingTripDates, setWorkingTripDates] = useState({})

    useEffect(()=> {
        const localBaseCampUser = localStorage.getItem("baseCamp-user")
        const baseCampUserObj = JSON.parse(localBaseCampUser)
        setCurrentUser(baseCampUserObj)
    }, [])

    return(
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <NavBar setWorkingTripId={setWorkingTripId} setWorkingTripDates={setWorkingTripDates}/>
                        <Outlet />
                    </>
                }
            >
                <Route index element={<USA workingTripId={workingTripId} />}/>
                <Route path=":stateId" element={<StateView workingTripId={workingTripId} workingTripDates={workingTripDates} />}/>
                <Route path="myTrips" 
                    element={<MyTrips 
                                currentUser={currentUser} 
                                setWorkingTripId={setWorkingTripId}
                                setWorkingTripDates={setWorkingTripDates} />} />
                <Route path="newTrip" element={<NewTrip currentUser={currentUser} />} />
                <Route path="profile" element={<Profile currentUser={currentUser} />} />
                <Route path="editProfile" element={<EditProfile currentUser={currentUser} />} />
            </Route>
        </Routes>
    )
}

