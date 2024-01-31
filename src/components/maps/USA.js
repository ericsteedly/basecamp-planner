import { Link } from "react-router-dom";
import "./Maps.css"

export default function USA() {
    return (
        <div className="usa-container">
            <img src="assets/USA.png" alt="Map of the" width="968" height="620" usemap="#Map"/>
                <map name="Map">
                    <Link to="/utah">
                        <area 
                            shape="poly" 
                            coords="190,190,237,198,233,219,268,225,259,313,171,302" 
                            alt="Utah"
                        />
                    </Link> 
                
                    <Link to="/california">
                        <area 
                            shape="poly" 
                            coords="20,156,81,169,77,202,68,233,109,297,145,348,149,358,153,367,
                                    144,372,143,380,139,388,139,393,141,398,136,400,92,397,90,380,78,364,73,
                                    364,73,358,67,355,61,351,53,343,39,340,40,325,40,324,36,319,24,287,27,278,
                                    21,270,21,255,14,245,15,238,7,224,10,204,5,191,7,180,14,172"
                            alt="California" 
                        />
                    </Link>
                </map>
        </div>
    )
}