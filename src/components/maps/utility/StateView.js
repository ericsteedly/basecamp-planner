import { useParams } from "react-router-dom";
import BaseCampDetails from "../baseCamps/BaseCampDetails";
import { useEffect, useState } from "react";
import StateMapArray from "./StateMapArray";
import { getStateById } from "../../../services/baseCampService";
import { Loader } from "@googlemaps/js-api-loader";
import "../Maps.css"



export default function StateView({ workingTripId, workingTripDates }) {
    const { stateId } = useParams()

    const [stateObj, setStateObj] = useState({})
    const [baseId, setBaseId] = useState(0)
    const [renderState, setRenderState] = useState({})
    const [baseLat, setBaseLat] = useState("40.12150192260742")
    const [baseLng, setBaseLng] = useState("-100.45039367675781")
    const [zoom, setZoom] = useState(4)

    // set map and baseId when base is clicked on
    const handleBaseClick = (e) =>{
        setBaseId(e.target.id)
        setBaseLat(e.target.dataset.lat)
        setBaseLng(e.target.dataset.lng)
        setZoom(14)
        }

    // create list of all the state map components
    const stateComponents = StateMapArray({ handleBaseClick })

    // import and set up google maps loader
    const loader = new Loader({
        apiKey: "AIzaSyAEYTRX0473bwL-lmhIZzgSVp1HCG8sC7g",
        version: "weekly",
        libraries: ["places"]
    })

    const mapOptions = {
        center: {
            lat: parseFloat(baseLat),
            lng: parseFloat(baseLng)
        },
        zoom: zoom
    }

    const loadMap = () => {
        loader
        .importLibrary('maps')
        .then(({Map}) => {
            new Map(document.getElementById("map"), mapOptions)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    // load new map for each state or baseCamp click
    useEffect(()=>{
        loadMap()
    }, [baseId, stateId])
    
    // Look through list of state map components and find coinciding stateId, also request state data from API
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
                {/* Google map rendered in div element below */}
                <div id="map"></div>
            </div> 
        </div>       
    
    )
}

