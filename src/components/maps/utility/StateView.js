import { useParams } from "react-router-dom";
import BaseCampDetails from "../baseCamps/BaseCampDetails";
import { useEffect, useState } from "react";
import StateMapArray from "./StateMapArray";
import "../Maps.css"
import { getStateById } from "../../../services/baseCampService";


export default function StateView({ workingTripId, workingTripDates }) {
    const { stateId } = useParams()

    const [stateObj, setStateObj] = useState({})
    const [baseId, setBaseId] = useState(0)
    const [renderState, setRenderState] = useState({})
    const [baseLocation, setBaseLocation] = useState("40.12150192260742,-100.45039367675781")
    const [zoom, setZoom] = useState("4")

    const handleBaseClick = (e) =>{
        setBaseId(e.target.id)
        setBaseLocation(e.target.dataset.location)
        setZoom("14")
        console.log(e.target.dataset.location)
        }

    const stateComponents = StateMapArray({ handleBaseClick })
    

    useEffect(()=>{
            const x = stateComponents.find((obj) => obj.id === parseInt(stateId))
            setRenderState(x) 

            getStateById(stateId).then((res)=>{
                setStateObj(res)
            })
    }, [stateId])


    return(
        <div className="stateView-main">
            {workingTripId !== 0 && 
            <h1 className="state-prompt">Now pick a BaseCamp for your recreations!</h1>}
            <div className="stateMap-main">
                {renderState.src}
                <BaseCampDetails 
                    workingTripId={workingTripId} 
                    baseId={baseId} 
                    workingTripDates={workingTripDates}
                    stateObj={stateObj}
                />
            </div>
            <div className="gmp-map-container">
                <gmp-map center={baseLocation} zoom={zoom} map-id="DEMO_MAP_ID">
                    <gmp-advanced-marker position={baseLocation} title="My location"></gmp-advanced-marker>
                </gmp-map>
            </div> 
        </div>       
    
    )
}

