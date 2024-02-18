import "../Maps.css"

export default function Arizona({ handleBaseClick }) {

    return (
        <div className="state-container">
            <img src="assets/ARIZONA.png" alt="State Map of Arizona" width="437" height="538" useMap="#Map"/>
            <map name="Map">
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="7" name="Page" shape="poly" coords="207,35,205,49,247,51,263,32,253,28,244,37"  alt="Page"/>
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="8" name="Monument Valley" shape="poly" coords="311,43,356,47,359,33,372,36,369,47,416,52,413,63,311,56"  alt="Monument Valley"/>
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="9" name="Flagstaff" shape="poly" coords="161,149,248,152,242,165,242,178,229,178,230,165,161,164"  alt="Flagstaff"/>
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                 <area id="10" name="Sedona" shape="poly" coords="205,214,220,209,217,195,227,193,231,203,261,197,266,210,207,227"  alt="Sedona"/>
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="11" name="Phoenix" shape="poly" coords="178,323,207,323,206,311,220,311,220,321,250,324,250,338,178,339"  alt="Phoenix"/>
                </button>
                <button className="base-btn" onClick={handleBaseClick}> 
                    <area id="12" name="Tucson" shape="poly" coords="268,408,329,421,325,435,299,431,295,447,283,443,286,428,267,422"  alt="Tucson"/>
                </button>
            </map>
        </div>
    )
}


