import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getHikeById } from "../../../services/hikeService"
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import "./Hikes.css"
import { IconButton } from "@mui/material";


export default function HikeDetails() {
const { hikeId, tripHikeId } = useParams()
const navigate = useNavigate()

const [hike, setHike] = useState({})

useEffect(()=>{
    getHikeById(hikeId).then((res)=>{
        setHike(res)
    })
    console.log(tripHikeId)
}, [hikeId])

    return (
        <div className="hikeDetails-main">
            <div className="hikeDetails-card">
               {tripHikeId === undefined ?
                <IconButton 
                    className="hikeDetails-close"
                    onClick={()=>{navigate(`/hikeList/${hike.baseCampId}`)}}
                >
                    <CloseSharpIcon/>
                </IconButton>
                :
                <IconButton 
                    className="hikeDetails-close"
                    onClick={()=>{navigate(-1)}}
                >
                    <CloseSharpIcon/>
                </IconButton>
                }
                <h2 className="hikeDetails-header">{hike.name}</h2>
                <div className="hikeDetails-description">{hike.description}</div>
            </div>
        </div>
    )
}