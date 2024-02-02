// import { useState } from "react"
// import BaseCampDetails from "../baseCamps/BaseCampDetails"
// import StateBasePrompt from "../utility/StateBasePrompt"
import "../Maps.css"

export default function Utah({ handleBaseClick }) {
    // const [baseId, setBaseId] = useState(0)

    // const handleBaseClick = (e) =>{
    // setBaseId(e.target.id)
    // }

    return (
        <>
            {/* <StateBasePrompt workingTripId={workingTripId} /> */}
            {/* <div className="stateMap-main"> */}
                <div className="state-container">
                    <img src="assets/UTAH.png" alt="State Map of Utah" width="365" height="477" useMap="#Map"/>
                        <map name="Map">
                            <button className="base-btn" onClick={handleBaseClick}> 
                                <area id="1" name="Salt Lake City" shape="poly" coords="78,101,196,102,194,111,78,113" alt="Salt Lake City" />
                            </button>
                            <button className="base-btn" onClick={handleBaseClick}>
                                <area id="2" name="Park City" shape="poly" coords="178,149,256,136,255,146,179,159" alt="" />
                            </button>
                            <button className="base-btn" onClick={handleBaseClick}>
                                <area id="3" name="Moab" shape="poly" coords="289,292,337,291,337,303,290,305" alt="" />
                            </button>
                            <button className="base-btn" onClick={handleBaseClick}>
                                <area id="4" name="Escalante" shape="poly" coords="164,375,248,389,246,401,161,386" alt="" />
                            </button>
                            <button className="base-btn" onClick={handleBaseClick}>
                                <area id="5" name="Hurricane" shape="poly" coords="7,433,97,425,98,436,8,444" alt="" />
                            </button>
                            <button className="base-btn" onClick={handleBaseClick}>
                                <area id="6" name="Kanab" shape="poly" coords="109,453,161,454,162,465,109,465" alt="" />
                            </button>
                        </map>
                </div>
                {/* <BaseCampDetails workingTripId={workingTripId} baseId={baseId} workingTripDates={workingTripDates}/> */}
            {/* </div> */}
        </>
    )
}