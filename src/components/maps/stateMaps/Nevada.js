import "../Maps.css"

export default function Nevada({ handleBaseClick }) {

    return (
        <div className="state-container">
            <img src="assets/NEVADA.png" alt="State Map of Nevada" width="365" height="536" useMap="#Map"/>
                <map name="Map">
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="21" name="Winnemucca" shape="poly" coords="98,64,209,51,210,65,152,73,154,85,143,87,140,74,103,77" alt="Winnemucca"
                        data-location="40.972930908203125,-117.73577880859375" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="22" name="Reno" shape="poly" coords="30,175,74,185,72,197,42,192,39,207,27,203,34,191,28,187" alt="Reno"
                        data-location="39.53001022338867,-119.81431579589844" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}> 
                        <area id="23" name="Las Vegas" shape="poly" coords="230,415,315,415,313,429,291,430,293,449,280,448,284,431,231,430" alt="Las Vegas"
                        data-location="36.17167663574219,-115.13914489746094" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                    <area id="24" name="Ely" shape="poly" coords="270,236,295,235,298,222,309,223,307,235,299,237,298,249,269,251" alt="Ely" 
                    data-location="39.25349044799805,-114.8742904663086" />
                    </button>
                </map>
        </div>
    )
}

