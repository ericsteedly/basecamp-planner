import { deleteTripBaseCamp } from "../../services/baseCampService"
import "./Trips.css"


export default function TripBaseCamp({ baseCamps, states, getSetTripBaseCamps }) {

    const handleBaseDelete = (campId) => {
        if(window.confirm("Are you sure you would like to remove this BaseCamp from your trip?")) {
            deleteTripBaseCamp(campId).then(()=>{
                getSetTripBaseCamps()
            })
        }
    }


    return (
        <ul className="tripCard-baseCamp-list">
            {baseCamps.map((camp) => {
                const startDateObj = new Date(camp.startDate)
                const startMonth = startDateObj.getMonth() + 1
                const startDay = startDateObj.getDate() + 1

                const endDateObj = new Date(camp.endDate)
                const endMonth = endDateObj.getMonth() + 1
                const endDay = endDateObj.getDate() + 1

                const campState = states.find((state) => state.id === camp.baseCamp.stateId)

                return (
                    <li className="baseCamp-list-item" key={camp.id}>
                        <div className="baseCamp-item">
                            <b>{camp.baseCamp.name}</b>, {campState?.name}
                        </div>
                        <div className="baseCamp-item">
                            {startMonth}/{startDay} to {endMonth}/{endDay}
                        </div>
                        <div className="baseCamp-item">
                            <i  className="fa-solid fa-trash-can"
                                onClick={()=>handleBaseDelete(camp.id)}
                            ></i>
                        </div>
                    </li>
                )
            })}
        </ul>
    )   
}