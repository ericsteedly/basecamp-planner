import { DatePicker } from "@mui/x-date-pickers"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editTrip, getTripById } from "../../services/tripService"
import dayjs from "dayjs"
import "./Trips.css"

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
        editTrip(editTripObj).then(()=>{
            navigate("/myTrips")
        })
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
            <h1>Edit Your Trip</h1>
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
                        slotProps={{
                            actionBar: {
                                actions: ['clear']
                            }
                        }}
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
                        slotProps={{
                            actionBar: {
                                actions: ['clear']
                            }
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="editTrip-btn-container">
                    <button className="save-editTrip-btn" type="submit">Save Trip</button>
                </div>
            </fieldset>
        </form>
    </div>
    )
}