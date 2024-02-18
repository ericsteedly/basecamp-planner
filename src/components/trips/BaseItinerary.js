import { useNavigate, useParams } from "react-router-dom"
import { deleteTripHike, getHikeDetails, getTripHikes } from "../../services/hikeService"
import { useEffect, useState } from "react"
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import { Button, IconButton, Link } from "@mui/material";
import { getTripBaseCampById } from "../../services/baseCampService";
import "./Trips.css"

export default function BaseItinerary() {
    const navigate = useNavigate()

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
            <div className="baseItinerary-header-container">
                <Button
                    variant="contained"
                    sx={{
                        boxShadow: 3,
                        marginRight: 'auto',
                        backgroundColor: '#8A8A8A',
                        color: 'white',
                        ":hover": {
                            backgroundColor: '#A1A1A1',
                            color: 'white'
                        }
                    }}
                    onClick={()=>{navigate(-1)}}
                >
                    Go Back
                </Button>
            <h2 className="baseItinerary-header">BaseCamp Hikes</h2>
        </div>
            <div className="baseItinerary-card">
            {hikes.map((hike) => {
                return (
                    <div className="baseItinerary-item" key={hike.id}>
                        <div className="hike-group">
                            <Link href={`/hikeDetails/${hike.hike.id}/${hike.id}`} color="#BE2800">
                                <div className="hike-name"><b>{hike.hike.name}</b></div>
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
                    <Link href={`/hikeList/${baseCamp.baseCampId}/${tripBaseId}`}>
                        <Button
                            className="hike-add-btn"
                            size="large"
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