import { useState } from "react"
import { postNewTrip } from "../../services/tripService"
import { useNavigate } from "react-router-dom"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { Button, TextField } from "@mui/material";
import "./Trips.css"

export default function NewTrip({ currentUser }) {
    const navigate = useNavigate()

    const [tripName, setTripName] = useState("")
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)



    const handleStart = (date) => {
        setStartDate(date)
    }

    const handleEnd = (date) => {
        setEndDate(date)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        const newTripObj = {
            userId: currentUser.id,
            name: tripName,
            startDate: startDate,
            endDate: endDate
          }
          if (startDate === null) {
            window.alert("Please select a start date!")
          } else if (endDate === null) {
            window.alert("Please select end date!")
          } else {
          postNewTrip(newTripObj).then(()=>{
            navigate("/myTrips")
          })
        }
    }

    return (
        <div className="newTrip-container">
            <form className="newTrip-form" onSubmit={handleSubmit}>
                <h1 className="newTrip-header">Create A New Trip</h1>
                    <div className="newTrip-name-container">
                        <TextField 
                            className="form-control"
                            variant="outlined"
                            label="Name Your Trip"
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
                    <div className="newTrip-date-container">
                        <div className="newTrip-date">
                            <DatePicker
                                id="start"
                                label="Start Date"
                                required
                                defaultValue={""}
                                inputFormat="MM/DD/YYYY"
                                value={dayjs(startDate)}
                                maxDate={dayjs(endDate)}
                                onChange={handleStart}
                                slotProps={{
                                    textField: {
                                        error: false,
                                        color: "warning",
                                        focused: true
                                    }
                                }}
                                />
                        </div>
                        <div className="newTrip-date">
                        <DatePicker
                                id="end"
                                label="End Date"
                                required
                                inputFormat="MM/DD/YYYY"
                                value={dayjs(endDate)}
                                minDate={dayjs(startDate)}
                                onChange={handleEnd}
                                slotProps={{
                                    textField: {
                                        error: false,
                                        color: "warning",
                                        focused: true
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="newTrip-btn-container">
                        <Button 
                            className="save-trip-btn"
                            variant="contained" 
                            type="submit"
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