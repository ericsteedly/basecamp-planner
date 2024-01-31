import { useState } from "react"
import "./Maps.css"

export default function Utah() {
const [baseId, setBaseId] = useState("")

const handleBaseClick = (e) =>{
    setBaseId(e.target.id)
}

    return (
        <div className="utah-container">
            <img src="assets/UTAH.png" alt="State Map of Utah" width="365" height="477" useMap="#Map"/>
                <map name="Map">
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="1" shape="poly" coords="78,101,196,102,194,111,78,113" alt="Salt Lake City" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="2" shape="poly" coords="178,149,256,136,255,146,179,159" alt="" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="3" shape="poly" coords="289,292,337,291,337,303,290,305" alt="" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="4" shape="poly" coords="164,375,248,389,246,401,161,386" alt="" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="5"s hape="poly" coords="7,433,97,425,98,436,8,444" alt="" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="6" shape="poly" coords="109,453,161,454,162,465,109,465" alt="" />
                    </button>
                </map>
        </div>
    )
}