import { Link } from "react-router-dom";
import "./Maps.css"

export default function USA({ workingTripId}) {
    return (
        <>
            <div className="usa-container">
            {workingTripId !== 0 && 
                <h1 className="usa-prompt">What state will you be traveling in?</h1>}
                <img src="assets/USA.png" alt="Map of the USA" width="968" height="620" useMap="#Map"/>
                    <map name="Map">
                        <Link to="1">
                            <area 
                                shape="poly" 
                                coords="190,190,237,198,233,219,268,225,259,313,171,302" 
                                alt="Utah"
                            />
                        </Link> 
                        <Link to="2">
                            <area 
                                shape="poly" 
                                coords="171,307,257,320,242,447,205,444,141,408,146,399,144,392,150,381,150,375,159,
                                        366,152,350,155,341,154,335,156,326,162,328" 
                                alt="Arizona" 
                            />
                        </Link>
                        <Link to="3">
                            <area 
                                shape="poly" 
                                coords="20,156,81,169,77,202,68,233,109,297,145,348,149,358,153,367,
                                        144,372,143,380,139,388,139,393,141,398,136,400,92,397,90,380,78,364,73,
                                        364,73,358,67,355,61,351,53,343,39,340,40,325,40,324,36,319,24,287,27,278,
                                        21,270,21,255,14,245,15,238,7,224,10,204,5,191,7,180,14,172"
                                alt="California" 
                            />
                        </Link>
                        <Link to="4">
                            <area 
                                shape="poly" 
                                coords="94,172,184,189,162,323,154,322,149,344,74,237,89,177" 
                                alt="Nevada"
                            />
                        </Link>
                        <Link to="5">
                            <area 
                                shape="poly" 
                                coords="264,323,288,322,368,331,362,441,290,437,289,443,263,441,261,450,254,449,251,433" 
                                alt="New Mexico"
                            />
                        </Link>
                    </map>
            </div>
        </>
    )
}