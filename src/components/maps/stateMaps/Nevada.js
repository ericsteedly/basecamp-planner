import "../Maps.css"

export default function Nevada({ handleBaseClick }) {

    return (
        <div className="state-container">
            <img src="assets/NEVADA.png" alt="State Map of Nevada" width="313" height="485" useMap="#Map"/>
                <map name="Map">
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="21" name="Winnemucca" shape="poly" coords="70,50,178,36,178,49,74,63" alt="Winnemucca" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="22" name="Reno" shape="poly" coords="12,148,56,158,54,172,10,163" alt="Reno" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="23" name="Las Vegas" shape="poly" coords="199,382,284,382,283,396,200,396" alt="Las Vegas" />
                    </button>
                </map>
        </div>
    )
}