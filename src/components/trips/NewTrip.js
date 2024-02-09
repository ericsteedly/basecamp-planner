import { useState } from "react"
import { postNewTrip } from "../../services/tripService"
import { useNavigate } from "react-router-dom"
import "./Trips.css"

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

export default function NewTrip({ currentUser }) {
    const navigate = useNavigate()

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

        const newTripObj = {
            userId: currentUser.id,
            name: tripName,
            startDate: startDate,
            endDate: endDate
          }
          postNewTrip(newTripObj).then(()=>{
            navigate("/myTrips")
          })
    }

    return (
        <div className="newTrip-container">
            <form className="newTrip-form" onSubmit={handleSubmit}>
                <h1>Create A New Trip</h1>
                <fieldset>
                    <div className="form-group">
                        <label> Name:
                            <input 
                                className="form-control" 
                                type="text"
                                placeholder="Give your trip a name"
                                required
                                value={tripName}
                                onChange={(e)=>{setTripName(e.target.value)}}
                            />
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <DatePicker
                            id="start"
                            label="Start Date"
                            required
                            inputFormat="MM/DD/YYYY"
                            value={dayjs(startDate)}
                            maxDate={dayjs(endDate)}
                            onChange={handleStart}
                            />
                    </div>
                    <div className="form-group">
                    <DatePicker
                            id="end"
                            label="End Date"
                            required
                            inputFormat="MM/DD/YYYY"
                            value={dayjs(endDate)}
                            minDate={dayjs(startDate)}
                            onChange={handleEnd}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="newTrip-btn-container">
                        <button className="save-trip-btn" type="submit">Save Trip</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}