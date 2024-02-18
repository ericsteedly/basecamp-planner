import { DatePicker } from "@mui/x-date-pickers"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editTrip, getTripById } from "../../services/tripService"
import dayjs from "dayjs"
import "./Trips.css"
import { Button, TextField } from "@mui/material"

export default function EditTrip() {
    const navigate = useNavigate()
    const { tripId } = useParams()

    const [userId, setUserId] = useState(0)
    const [tripName, setTripName] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")


    const handleStart = (date) => {
        setStartDate(date)
    }

    const handleEnd = (date) => {
        setEndDate(date)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const editTripObj = {
                id: tripId,
                userId: userId,
                name: tripName,
                startDate: startDate,
                endDate: endDate
            }
        if (startDate === null) {
            window.alert("Please select a start date!")
            } else if (endDate === null) {
            window.alert("Please select end date!")
            } else {
        editTrip(editTripObj).then(()=>{
            navigate("/myTrips")
        })}
    }


    useEffect(()=>{
        getTripById(tripId).then((res)=>{
            setTripName(res.name)
            setStartDate(res.startDate)
            setEndDate(res.endDate)
            setUserId(res.userId)
        })
    }, [tripId])


    return (
        <div className="editTrip-container">
            <form className="editTrip-form" onSubmit={handleSubmit}>
                <h1 className="editTrip-header">Edit Your Trip</h1>
                    <div className="editTrip-name-container">
                            <TextField 
                            className="form-control"
                            variant="outlined"
                            label="Name"
                            required
                            color="warning"
                            focused
                            value={tripName}
                            InputLabelProps={{
                                shrink: true
                            }}
                                onChange={(e)=>{setTripName(e.target.value)}}
                            />
                    </div>

                    <div className="editTrip-date-container">
                        <div className="editTrip-date">
                            <DatePicker
                                id="start"
                                label="Start Date"
                                required
                                inputFormat="MM/DD/YYYY"
                                value={dayjs(startDate)}
                                maxDate={dayjs(endDate)}
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
                        <div className="editTrip-date">
                        <DatePicker
                                id="end"
                                label="End Date"
                                required
                                inputFormat="MM/DD/YYYY"
                                value={dayjs(endDate)}
                                minDate={dayjs(startDate)}
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
                    <div className="editTrip-btn-container">
                        <Button 
                            className="save-editTrip-btn" 
                            type="submit"
                            variant="contained"
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
                        Save Trip
                        </Button>
                    </div>

            </form>
    </div>
    )
}