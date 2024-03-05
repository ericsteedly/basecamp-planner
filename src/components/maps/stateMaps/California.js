import "../Maps.css"

export default function California({ handleBaseClick }) {

    return (
        <div className="state-container">
            <img src="assets/CALIFORNIA.png" alt="State Map of California" width="454" height="539" useMap="#Map"/>
                <map name="Map">
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="13" name="Redding" shape="poly" coords="84,57,140,58,137,70,111,70,111,78,103,77,103,70,84,69" alt="Redding"
                        data-lat="40.586647033691406" data-lng="-122.39168548583984" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="14" name="Eureka" shape="poly" coords="9,82,26,81,26,70,34,70,34,81,56,82,56,93,10,93" alt="Eureka"
                        data-lat="40.802249908447266" data-lng="-124.16370391845703" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="15" name="South Lake Tahoe" shape="poly" coords="116,159,213,158,212,169,188,169,188,180,179,180,178,169,116,169" alt="South Lake Tahoe"
                        data-lat="38.940086364746094" data-lng="-119.9771728515625" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="16" name="San Francisco" shape="poly" coords="75,214,155,214,155,225,92,224,92,242,85,241,86,225,77,225" alt="San Francisco"
                        data-lat="37.77510070800781" data-lng="-122.41952514648438" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="17" name="Lee Vining" shape="poly" coords="200,231,228,237,230,229,238,230,235,237,256,243,256,252,200,240" alt="Lee Vining"
                        data-lat="37.95768356323242" data-lng="-119.1199722290039" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="18" name="San Luis Obispo" shape="poly" coords="143,349,230,372,228,382,160,365,159,377,150,375,156,364,140,358" alt="San Luis Obispo"
                        data-lat="35.282936096191406" data-lng="-120.65961456298828" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="19" name="Yucca Valley" shape="poly" coords="294,440,380,434,378,446,347,448,348,456,338,457,338,448,296,452" alt="Yucca Valley"
                        data-lat="34.11438751220703" data-lng="-116.43221282958984" />
                    </button>
                    <button className="base-btn" onClick={handleBaseClick}>
                        <area id="20" name="San Diego" shape="poly" coords="320,496,385,496,385,506,321,506,308,514,306,508,318,504" alt="San Diego"
                        data-lat="32.71586608886719" data-lng="-117.16106414794922" />
                    </button>
                </map>
        </div>
    )
}
