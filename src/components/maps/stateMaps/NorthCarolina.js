import "../Maps.css"

export default function NorthCarolina({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/NORTHCAROLINA.png" alt="State Map of North Carolina" width="904" height="405" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="91" name="Asheville" shape="poly" coords="198,164,280,163,281,176,212,178,208,187,199,185" alt="Asheville"
            data-lat="35.59512710571289" data-lng="-82.55147552490234" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="92" name="Boone" shape="poly" coords="264,102,268,125,278,125,278,114,318,114,317,101" alt="Boone"
            data-lat="36.216854095458984" data-lng="-81.67455291748047" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="93" name="Brevard" shape="poly" coords="128,241,184,233,185,222,193,224,196,232,200,243,132,254" alt="Brevard"
            data-lat="35.23356246948242" data-lng="-82.73429107666016" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="94" name="Cherokee" shape="poly" coords="53,219,125,218,128,210,138,214,132,221,134,231,52,232" alt="Cherokee"
            data-lat="35.477108001708984" data-lng="-83.32061004638672" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="95" name="Hendersonville" shape="poly" coords="224,201,361,191,362,204,232,215,225,223,216,220,222,213" alt="Hendersonville"
            data-lat="35.31877899169922" data-lng="-82.4609603881836" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="96" name="Boiling Springs" shape="poly" coords="302,225,454,224,453,237,303,234" alt="Boiling Springs"
            data-lat="35.25444793701172" data-lng="-81.66705322265625" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="97" name="Raleigh" shape="poly" coords="581,172,649,171,647,158,602,159,603,141,593,142,593,157,582,159" alt="Raleigh"
            data-lat="35.77971267700195" data-lng="-78.63819122314453" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="98" name="Wilmington" shape="poly" coords="593,318,695,318,689,340,679,342,679,332,592,331" alt="Wilmington"
            data-lat="34.2105598449707" data-lng="-77.88680267333984" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="99" name="Blowing Rock" shape="poly" coords="391,157,387,169,272,150,264,135,273,131,279,138" alt="Blowing Rock"
            data-lat="36.135257720947266" data-lng="-81.67760467529297" />
          </button>
        </map>
    </div>
  )
}


