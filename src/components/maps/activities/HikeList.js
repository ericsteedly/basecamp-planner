import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getHikesByBaseId, postTripHike } from "../../../services/hikeService"
import { Button, Link } from "@mui/material"
import KeyboardReturnTwoToneIcon from '@mui/icons-material/KeyboardReturnTwoTone';
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
            <div className="hikes-header-container">
                <div className="hikes-goBack-btn">
                    <Button 
                        className="hikes-back-btn"
                        startIcon={<KeyboardReturnTwoToneIcon/>}
                        variant="contained"
                        color="inherit"
                        sx={{
                            boxShadow: 3,
                            backgroundColor: '#8A8A8A',
                            color: 'white',
                            ":hover": {
                                backgroundColor: '#A1A1A1',
                                color: 'white'
                            }
                        }}
                        onClick={()=>navigate(-1)}
                    >
                        Go Back
                    </Button>
                </div>
                <h2 className="hikes-header">Hiking Trails Near This BaseCamp</h2>
            </div>
            {hikes.map((hike) => {
                return (
                    <div className="hikes-card" key={hike.id}>
                        <div className="hike-group">
                            {tripBaseId === undefined ?   
                            <div className="hike-item">
                                <Link href={`/hikeDetails/${hike.id}`} color="#BE2800">
                                    <b>{hike.name}</b>
                                </Link>
                            </div>
                            :
                            <div className="hike-item">
                                <Link href={`/hikeDetails/${hike.id}/${tripBaseId}`} color="#BE2800">
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
                                    size="small"
                                    sx={{
                                        boxShadow: 3,
                                        backgroundColor: '#8A8A8A',
                                        color: 'white',
                                        ":hover": {
                                            backgroundColor: '#A1A1A1',
                                            color: 'white'
                                        }
                                    }}
                                    onClick={()=>handleAddHike(hike.id)}
                                >
                                Add to BaseCamp
                                </Button>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}