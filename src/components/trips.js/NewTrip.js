import { useState } from "react"
import "./Trips.css"
import { postNewTrip } from "../../services/tripService"
import { useNavigate } from "react-router-dom"

export default function NewTrip({ currentUser }) {
    const navigate = useNavigate()

    const [tripName, setTripName] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")


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
                        <label> Start Date:
                            <input
                                type="date"
                                id="start"
                                name="startDate"
                                required
                                value={startDate}
                                max={endDate}
                                onChange={(e)=>{setStartDate(e.target.value)}}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label> End Date:
                            <input
                                type="date"
                                id="start"
                                name="startDate"
                                required
                                value={endDate}
                                min={startDate}
                                onChange={(e)=>{setEndDate(e.target.value)}}
                            />
                        </label>
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