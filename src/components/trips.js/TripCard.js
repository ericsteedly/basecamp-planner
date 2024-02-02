import { useEffect, useState } from "react"
import { deleteTrip, getStates, getTripBaseCamps } from "../../services/tripService"
import "./Trips.css"
import TripBaseCamp from "./TripBaseCamp"
import { useNavigate } from "react-router-dom"

export default function TripCard({ trip, getSetUserTrips, setWorkingTripId, setWorkingTripDates }) {
    const navigate = useNavigate()

    const [baseCamps, setBaseCamps] = useState([])
    const [states, setStates] = useState([])

    const getSetTripBaseCamps = () => {
        getTripBaseCamps(trip.id).then((res)=>{
            setBaseCamps(res)
        })
    }

    useEffect(()=>{
        getSetTripBaseCamps()
    }, [trip])

    useEffect(()=>{
        getStates().then((res)=>{
            setStates(res)
        })
    }, [])

    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete this trip?")){
            deleteTrip(trip.id).then(()=>{
                getSetUserTrips()
            })
        }
    }

    const handleAddBtn = () => {
        setWorkingTripId(trip.id)
        setWorkingTripDates(
            {
                startDate: trip.startDate,
                endDate: trip.endDate
            }
        )
        navigate("/") 
    }

    return (
        <div className="tripCard">
            <div className="tripCard-header">
                <h2 className="tripCard-name">{trip.name}</h2>
                <div className="tripCard-date-container">
                    <div className="tripCard-date"><b>Start Date:</b> {trip.startDate}</div>
                    <div className="tripCard-date"><b>End Date:</b> {trip.endDate}</div>
                </div>
            </div>
            <TripBaseCamp baseCamps={baseCamps} states={states} getSetTripBaseCamps={getSetTripBaseCamps}/>
            <div className="tripCard-btn-container">
                <button 
                    className="tripCard-add-btn"
                    onClick={handleAddBtn}
                >
                Add BaseCamp
                </button>
                <button 
                    className="tripCard-delete-btn"
                    onClick={handleDelete}
                >
                Delete Trip
                </button>
            </div>
        </div>
    )
}