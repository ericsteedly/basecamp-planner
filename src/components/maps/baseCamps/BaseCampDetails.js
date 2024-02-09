import { useEffect, useState } from "react"
import { getBaseCampById, getTripBaseCamps, postTripBaseCamp } from "../../../services/baseCampService"
import "./BaseCampDetails.css"
import { Link, useNavigate } from "react-router-dom"

import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { Button } from "@mui/material"

export default function BaseCampDetails({ workingTripId, baseId, workingTripDates }) {
const navigate = useNavigate()

    const [tripBaseCamps, setTripBaseCamps] = useState([])
    const [baseCamp, setBaseCamp] = useState({})
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startDateMax, setStartDateMax] = useState("")
    const [endDateMin, setEndDateMin] = useState("")

    const getSetTripBaseCamps = () => {
        getTripBaseCamps(workingTripId).then((res)=>{
            setTripBaseCamps(res)
        })
    }

    const getSetBaseCamp = () => {
        getBaseCampById(baseId).then((res)=>{
            setBaseCamp(res)
        })
    }

    const createTripBaseCamp = () => {
        const obj = {
            tripId: workingTripId,
            baseCampId: baseCamp.id,
            startDate: startDate,
            endDate: endDate
        }
        if(tripBaseCamps.some((base)=> base.baseCampId === baseCamp.id )) {
            window.confirm("You are already visiting this BaseCamp on your trip, are you sure you want to add it again?") &&
                postTripBaseCamp(obj).then(()=>{
                    navigate("/myTrips")
            })
        } else {
            postTripBaseCamp(obj).then(()=>{
                navigate("/myTrips")
            })
        }
    }

    const handleSave = () => {
        if (baseId === 0) {
            window.alert("Select a baseCamp!")
        } else if (startDate === "") {
            window.alert("Please select a Start date!")
        } else if (endDate === "") {
            window.alert("Please select an End date!")
        } else {
            createTripBaseCamp()
        }
    }

    
    const setDateParameters = () => {
        startDate === "" ? setEndDateMin(workingTripDates.startDate) : setEndDateMin(startDate)
        endDate === "" ? setStartDateMax(workingTripDates.endDate) : setStartDateMax(endDate)
    }

    const handleStart = (date) => {
        setStartDate(date)
    }

    const handleEnd = (date) => {
        setEndDate(date)
    }



    useEffect(()=>{
        workingTripId !== 0 && getSetTripBaseCamps()
    }, [workingTripId])

    useEffect(()=>{
        setDateParameters()
    }, [workingTripDates, startDate, endDate])

    useEffect(()=>{
        baseId !== 0 && getSetBaseCamp()
    }, [baseId])

    
    return (
        <div className="baseCamp-details-main">
            <div className="baseCamp-details">
                <h1>BaseCamp Details</h1>
                <h3 className="baseCamp-name"><u>{baseCamp.name}</u></h3>
                {baseCamp.description}
                {baseId !== 0 && 
                    <div className="view-btn-container">
                        <Link to={`/hikeList/${baseId}`}>
                            <Button variant="contained">View Trails</Button>
                        </Link>
                    </div>}
            </div>
            {workingTripId !== 0 &&
            <div className="addBase-container">
                <div className="addBase-date-container">
                    <div className="addBase-date">
                            <DatePicker
                            id="start"
                            label="Start Date"
                            required
                            inputFormat="MM/DD/YYYY"
                            value={startDate}
                            minDate={dayjs(endDateMin)}
                            maxDate={dayjs(startDateMax)}
                            onChange={handleStart}
                            slotProps={{
                                actionBar: {
                                    actions: ['clear']
                                }
                            }}
                            />
                    </div>
                    <div className="addBase-date">
                            <DatePicker
                            id="end"
                            label="End Date"
                            required
                            inputFormat="MM/DD/YYYY"
                            value={endDate}
                            minDate={dayjs(endDateMin)}
                            maxDate={dayjs(startDateMax)}
                            onChange={handleEnd}
                            slotProps={{
                                actionBar: {
                                    actions: ['clear']
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="addBase-btn-container">
                    <button 
                        className="addBase-btn"
                        onClick={handleSave}
                    >
                    Save to Trip
                    </button>
                </div>    
            </div>
            } 
        </div>
    )
}