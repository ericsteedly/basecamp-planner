import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getHikesByBaseId, postTripHike } from "../../../services/hikeService"
import { Button } from "@mui/material"
import "./Hikes.css"


export default function HikeList() {
    const navigate = useNavigate()
    const { baseId, tripBaseId } = useParams()

    const [hikes, setHikes] = useState([])

    const getSetHikes = () => {
        getHikesByBaseId(baseId).then((res)=>{
            setHikes(res)
        })
    }

    const handleAddHike = (id) => {
        const newHikeObj = {
            tripBaseCampId: parseInt(tripBaseId),
            hikeId: id
        }
        postTripHike(newHikeObj).then(()=>{
            navigate(-1)
        })
    }


    useEffect(()=>{
        getSetHikes()
    }, [baseId])

    return (
        <div className="hikes-main-container">
            <h2>Hiking Trails Near This BaseCamp</h2>
            {hikes.map((hike) => {
                return (
                    <div className="hikes-card" key={hike.id}>
                        <div className="hike-group">
                            {tripBaseId === undefined ?   
                            <div className="hike-item">
                                <Link to={`/hikeDetails/${hike.id}`}>
                                    <b>{hike.name}</b>
                                </Link>
                            </div>
                            :
                            <div className="hike-item">
                                <Link to={`/hikeDetails/${hike.id}/${tripBaseId}`}>
                                    <b>{hike.name}</b>
                                </Link>
                            </div>
                            }
                            <div className="hike-item">{hike.location}</div>
                        </div>
                        {tripBaseId !== undefined &&
                            <div className="addHike-btn-container">
                                <Button
                                    className="addHike-btn"
                                    variant="contained"
                                    onClick={()=>handleAddHike(hike.id)}
                                >
                                Add Hike to BaseCamp
                                </Button>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}