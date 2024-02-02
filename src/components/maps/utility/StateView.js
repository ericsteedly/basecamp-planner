import { useParams } from "react-router-dom";
import StateBasePrompt from "./StateBasePrompt";
import BaseCampDetails from "../baseCamps/BaseCampDetails";
import { useEffect, useState } from "react";
import StateMapArray from "./StateMapArray";
import "../Maps.css"


export default function StateView({ workingTripId, workingTripDates }) {
    const { stateId } = useParams()

    const [baseId, setBaseId] = useState(0)
    const [renderState, setRenderState] = useState({})

    const handleBaseClick = (e) =>{
        setBaseId(e.target.id)
        }

    const stateComponents = StateMapArray({ handleBaseClick })
    

    useEffect(()=>{
            const x = stateComponents.find((obj) => obj.id === parseInt(stateId))
            setRenderState(x) 
    }, [stateId])


    return(
        <>
            <StateBasePrompt workingTripId={workingTripId} />
            <div className="stateMap-main">
                {renderState.src}
                <BaseCampDetails workingTripId={workingTripId} baseId={baseId} workingTripDates={workingTripDates}/>
            </div>
        </>
    )
}