import { useState } from "react";
import { deleteTripBaseCamp } from "../../services/baseCampService"
import EditDatesPopup from "./EditDatesPopup";
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import "./Trips.css"
import { IconButton, Link } from "@mui/material";



export default function TripBaseCamp({ baseCamps, states, trip, getSetTripBaseCamps }) {
    const [popupBtn, setPopupBtn] = useState(false)

    const handleBaseDelete = (campId) => {
        if(window.confirm("Are you sure you would like to remove this BaseCamp from your trip?")) {
            deleteTripBaseCamp(campId).then(()=>{
                getSetTripBaseCamps()
            })
        }
    }


    const convertDate = (dateString) => {
        let ogDate = new Date(dateString)
        let options = {
                month: '2-digit',
                day: '2-digit'
        }
        let formattedDate = ogDate.toLocaleDateString('en-US', options)
        return formattedDate
    }


    return ( 
        <div className="tripCard-baseCamp-list-container">
            <ul className="tripCard-baseCamp-list">
                {baseCamps.map((camp) => {
                    const startDate = convertDate(camp.startDate)
                    const endDate = convertDate(camp.endDate)
                    const campState = states.find((state) => state.id === camp.baseCamp.stateId)

                    return (
                        <li className="baseCamp-list-item" key={camp.id}>
                            <div className="baseCamp-item">
                                <Link href={`/baseItinerary/${camp.id}`} color="#BE2800">
                                    <b>{camp.baseCamp.name}</b>, {campState?.name}
                                </Link>
                            </div>
                            <div className="baseCamp-item">
                                {startDate} to {endDate}
                            </div>
                            <div className="baseCamp-item-btns">
                                <IconButton
                                    onClick={()=>handleBaseDelete(camp.id)}
                                    aria-label="Delete BaseCamp"
                                    sx={{
                                        color: "#8A8A8A"
                                    }}
                                >
                                    <DeleteForeverSharpIcon
                                        sx={{fontSize: 30}}
                                    />
                                </IconButton>
                                <IconButton
                                    onClick={()=>setPopupBtn(true)}
                                    aria-label="Edit BaseCamp dates"
                                    sx={{
                                        color: "#BE2800"
                                    }}
                                >
                                    <DateRangeSharpIcon 
                                        sx={{fontSize: 30}}
                                    />
                                </IconButton>
                                <EditDatesPopup 
                                    trigger={popupBtn} 
                                    setTrigger={setPopupBtn}
                                    trip={trip}
                                    camp={camp}
                                    popupBtn={popupBtn}
                                    getSetTripBaseCamps={getSetTripBaseCamps}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )   
}