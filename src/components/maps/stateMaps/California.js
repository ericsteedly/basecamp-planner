import "../Maps.css"

export default function California({ handleBaseClick }) {

    return (
        <div className="state-container">
            <img src="assets/CALIFORNIA.png" alt="State Map of California" width="412" height="486" useMap="#Map"/>
                <map name="Map">
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="13" name="Redding"shape="poly" coords="70,43,123,44,122,54,72,54" alt="Redding"/>
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="14" name="Eureka" shape="poly" coords="2,63,47,64,47,73,1,74" alt="Eureka" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="15" name="South Lake Tahoe" shape="poly" coords="102,136,200,135,200,146,102,147" alt="South Lake Tahoe" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="16" name="San Francisco" shape="poly" coords="64,188,145,189,144,200,63,200" alt="San Francisco" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="17" name="Lee Vining" shape="poly" coords="184,207,243,218,240,228,182,218" alt="Lee Vining" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="18" name="San Luis Obispo" shape="poly" coords="129,318,219,341,216,353,127,329" alt="San Luis Obispo" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="19" name="Yucca Valley" shape="poly" coords="267,396,355,390,357,402,272,407" alt="Yucca Valley" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="20" name="San Diego" shape="poly" coords="300,459,364,460,364,470,301,471" alt="San Diego" />
                    </button>
                </map>
        </div>
    )
}