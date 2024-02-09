import { Link, useParams } from "react-router-dom"
import { deleteTripHike, getHikeDetails, getTripHikes } from "../../services/hikeService"
import { useEffect, useState } from "react"
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import { Button, IconButton } from "@mui/material";
import "./Trips.css"
import { getTripBaseCampById } from "../../services/baseCampService";

export default function BaseItinerary() {
    const { tripBaseId } = useParams()
    
    const [baseCamp, setBaseCamp] = useState({})
    const [hikes, setHikes] = useState([])


    const getItinerary = () => {
        getTripHikes(tripBaseId).then(async (tripHikes)=>{
            const x = await Promise.all(
                tripHikes.map((hike)=>{
                    return getHikeDetails(hike.id)
                })
            )
            setHikes(x)
        })
    }

    const getSetBaseCamp = () => {
        getTripBaseCampById(tripBaseId).then((res)=>{
            setBaseCamp(res)
        })
    }

    const handleDelete = (id) => {
        deleteTripHike(id).then(()=>{
            getItinerary()
        })
    }

    useEffect(()=>{
        getItinerary()
        getSetBaseCamp()
    }, [tripBaseId])


    return (
        <div className="baseItinerary-main">
            <div className="baseItinerary-card">
            {hikes.map((hike) => {
                return (
                    <div className="baseItinerary-item" key={hike.id}>
                        <div className="hike-group">
                            <Link to={`/hikeDetails/${hike.hike.id}/${hike.id}`}>
                                <div className="hike-name">{hike.hike.name}</div>
                            </Link>
                            <div className="hike-location">{hike.hike.location}</div>
                        </div>
                        <IconButton 
                            className="hike-delete-btn"
                            onClick={()=>handleDelete(hike.id)}
                        >
                            <DeleteForeverSharpIcon />
                        </IconButton>
                    </div>
                )
            })}
                <div className="baseItinerary-btn-container">
                    <Link to={`/hikeList/${baseCamp.baseCampId}/${tripBaseId}`}>
                        <Button
                            className="hike-add-btn"
                            size="large"
                            variant="contained"
                            startIcon={<AddBoxSharpIcon />}
                        > 
                        Add Hike
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}