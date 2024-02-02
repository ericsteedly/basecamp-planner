import "../Maps.css"

export default function Arizona({ handleBaseClick }) {

    return (
        <div className="state-container">
            <img src="assets/ARIZONA.png" alt="State Map of Arizona" width="381" height="475" useMap="#Map"/>
            <map name="Map">
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="7" name="Page" shape="poly" coords="174,11,212,12,212,23,174,24" alt="Page" />
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="8" name="Monument Valley" shape="poly" coords="269,21,374,31,372,43,268,35" alt="Monument Valley"/>
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="9" name="Flagstaff" shape="poly" coords="131,113,218,115,217,129,132,128" alt="Flagstaff" />
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="10" name="Sedona" shape="poly" coords="171,181,229,165,235,177,172,196" alt="Sedona" />
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="11" name="Phoenix" shape="poly" coords="138,300,209,299,210,313,139,313" alt="Phoenix" />
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="12" name="Tucson" shape="poly" coords="236,364,297,375,292,389,235,378" alt="Tucson "/>
                </button>
            </map>
        </div>
    )
}