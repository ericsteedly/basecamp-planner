import { useEffect, useState } from "react"
import { deleteTrip, getStates, getTripBaseCamps } from "../../services/tripService"
import "./Trips.css"
import TripBaseCamp from "./TripBaseCamp"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

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

    const convertDate = (dateString) => {
        let ogDate = new Date(dateString)
        let options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
        }
        let formattedDate = ogDate.toLocaleDateString('en-US', options)
        return formattedDate
    }

    return (
        <div className="tripCard">
            <div className="tripCard-header">
                <h2 className="tripCard-name">{trip.name}</h2>
                <div className="tripCard-date-container">
                    <div className="tripCard-date"><b>Start Date:</b> &nbsp;
                    {convertDate(trip.startDate)}
                    </div>
                    <div className="tripCard-date"><b>End Date:</b> &nbsp;
                    {convertDate(trip.endDate)}
                    </div>
                </div>
            </div>
            <TripBaseCamp 
                baseCamps={baseCamps} 
                states={states}
                trip={trip} 
                getSetTripBaseCamps={getSetTripBaseCamps}
            />
            <div className="tripCard-btn-container">
                <Button 
                    className="tripCard-add-btn"
                    onClick={handleAddBtn}
                    sx={{
                        margin: 1,
                        boxShadow: 3, 
                        backgroundColor: '#8A8A8A',
                        color: 'white',
                        ":hover": {
                            backgroundColor: '#A1A1A1',
                            color: 'white'
                        }
                    }}
                >
                Add BaseCamp
                </Button>
                <Link to={`/myTrips/${trip.id}`}>
                    <Button
                        className="tripCard-edit-obtn"
                        sx={{
                            margin: 1,
                            boxShadow: 3,
                            backgroundColor: '#8A8A8A',
                            color: 'white',
                            ":hover": {
                                backgroundColor: '#A1A1A1',
                                color: 'white'
                            }
                        }}
                    >
                    Edit Trip 
                    </Button>
                </Link>
                <Button 
                    className="tripCard-delete-btn"
                    onClick={handleDelete}
                    sx={{
                        margin: 1,
                        boxShadow: 3,
                        backgroundColor: '#8A8A8A',
                        color: 'white',
                        ":hover": {
                            backgroundColor: '#A1A1A1',
                            color: 'white'
                        }
                    }}
                >
                Delete Trip
                </Button>
            </div>
        </div>
    )
}