import { useEffect, useState } from "react"
import { getTripsByUserId } from "../../services/tripService"
import TripCard from "./TripCard"
import "./Trips.css"

export default function MyTrips({ currentUser, setWorkingTripId, setWorkingTripDates }) {

    const [userTrips, setUserTrips] = useState([])

    const getSetUserTrips = () => {
        getTripsByUserId(currentUser.id).then((res)=>{
            setUserTrips(res)
        })
    }

    useEffect(()=>{
        getSetUserTrips()
    }, [currentUser])

    return (
        <div className="tripList-container">
            <h2 className="tripList-header">Your Trips</h2>
            {userTrips.map((trip) => {
                return (
                    <TripCard
                        key={trip.id}
                        trip={trip}
                        getSetUserTrips={getSetUserTrips}
                        setWorkingTripId={setWorkingTripId}
                        setWorkingTripDates={setWorkingTripDates}
                    />
                )
            })}
        </div>
    )
}