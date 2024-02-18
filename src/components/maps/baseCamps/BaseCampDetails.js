import { useEffect, useState } from "react"
import { getBaseCampById, getTripBaseCamps, postTripBaseCamp } from "../../../services/baseCampService"
import "./BaseCampDetails.css"
import { Link, useNavigate } from "react-router-dom"

import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { Button } from "@mui/material"

export default function BaseCampDetails({ workingTripId, baseId, workingTripDates, stateObj }) {
const navigate = useNavigate()

    const [tripBaseCamps, setTripBaseCamps] = useState([])
    const [baseCamp, setBaseCamp] = useState({})
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
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
        } else if (startDate === null) {
            window.alert("Please select a Start date!")
        } else if (endDate === null) {
            window.alert("Please select an End date!")
        } else {
            createTripBaseCamp()
        }
    }

    
    const setDateParameters = () => {
        startDate === null ? setEndDateMin(workingTripDates.startDate) : setEndDateMin(startDate)
        endDate === null ? setStartDateMax(workingTripDates.endDate) : setStartDateMax(endDate)
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
                <h1 className="baseCamp-details-header">BaseCamp Info</h1>
                <h3 className="baseCamp-name"><u>{baseCamp.name}</u></h3>
                
                {baseId === 0 
                    ?
                    <div>{stateObj.description}</div>
                    :
                        <>
                        <div>{baseCamp.description}</div>
                        <div className="view-btn-container">
                            <Link to={`/hikeList/${baseId}`}>
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
                                View Trails
                                </Button>
                            </Link>
                        </div>
                        </>
                    }
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
                                },
                                textField: {
                                    color: "warning",
                                    focused: true
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
                                },
                                textField: {
                                    color: "warning",
                                    focused: true
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="addBase-btn-container">
                    <Button 
                        className="addBase-btn"
                        variant="contained"
                        size="small"
                        sx={{
                            boxShadow: 3,
                            backgroundColor: '#8A8A8A',
                            color: 'white',
                            ":hover": {
                                backgroundColor: '#A1A1A1',
                                color: 'white'
                            }
                        }}
                        onClick={handleSave}
                    >
                    Save to Trip
                    </Button>
                </div>    
            </div>
            } 
        </div>
    )
}