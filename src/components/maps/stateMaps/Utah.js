import "../Maps.css"

export default function Utah({ handleBaseClick }) {


    return (
            <div className="state-container">
                <img src="assets/UTAH.png" alt="State Map of Utah" width="428" height="541" useMap="#Map"/>
                    <map name="Map">
                        <button className="base-btn" onClick={handleBaseClick}> 
                            <area id="1" name="Salt Lake City" shape="poly" coords="105,125,227,125,225,136,184,139,183,152,170,152,170,139,104,139" alt="Salt Lake City" 
                            data-location="40.76092529296875,-111.89103698730469" />
                        </button>
                        <button className="base-btn" onClick={handleBaseClick}>
                            <area id="2" name="Park City" shape="poly" coords="204,173,206,158,215,156,219,169,285,159,285,172,205,186" alt="Park City" 
                            data-location="40.646217346191406,-111.49797058105469" />
                        </button>
                        <button className="base-btn" onClick={handleBaseClick}>
                            <area id="3" name="Moab" shape="poly" coords="325,312,375,312,374,325,363,326,363,343,350,342,350,328,326,327" alt="Moab" 
                            data-location="38.573482513427734,-109.54981994628906"/>
                        </button>
                        <button className="base-btn" onClick={handleBaseClick}>
                            <area id="4" name="Escalante" shape="poly" coords="193,416,279,433,277,449,218,437,213,450,199,445,203,432,191,429" alt="Escalante" 
                            data-location="37.770442962646484,-111.60209655761719" />
                        </button>
                        <button className="base-btn" onClick={handleBaseClick}>
                        <area id="5" name="Hurricane" shape="poly" coords="28,479,120,470,121,484,80,489,78,503,66,503,66,490,28,492" alt="Hurricane"
                            data-location="37.17543029785156,-113.28990173339844"/>
                        </button>
                        <button className="base-btn" onClick={handleBaseClick}>
                            <area id="6" name="Kanab" shape="poly" coords="138,495,194,495,193,509,141,510,137,515,125,515,126,506,135,505" alt="Kanab"
                            data-location="37.04765701293945,-112.5263900756836" />
                        </button>
                    </map>
            </div>
    )
}


