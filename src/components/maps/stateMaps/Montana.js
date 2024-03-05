import "../Maps.css"

export default function Montana({ handleBaseClick }) {

    return (
        <div className="state-container">
          <img src="assets/MONTANA.png" alt="State Map of Montana" width="847" height="495" useMap="#Map"/>
            <map name="Map">
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="66" name="Bozeman" shape="poly" coords="263,347,343,346,340,376,329,375,328,363,264,361" alt="Bozeman"
                data-lat="45.67946243286133" data-lng="-111.03736877441406" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="67" name="Whitefish" shape="poly" coords="69,61,158,48,157,63,140,65,140,81,131,82,126,68,74,73" alt="Whitefish"
                data-lat="48.410743713378906" data-lng="-114.33529663085938" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="68" name="Missoula" shape="poly" coords="101,204,178,205,182,218,163,220,161,236,148,233,147,219,101,221" alt="Missoula"
                data-lat="46.87220001220703" data-lng="-113.9940185546875" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="69" name="Kalispell" shape="poly" coords="121,128,205,128,202,112,136,112,135,97,124,99" alt="Kalispell"
                data-lat="48.192138671875" data-lng="-114.3167953491211" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="70" name="Helena" shape="poly" coords="282,227,344,237,340,252,297,245,290,259,280,254" alt="Helena"
                data-lat="46.58927917480469" data-lng="-112.03914642333984" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="71" name="Red Lodge" shape="poly" coords="474,419,564,419,562,405,476,406,466,401,462,409" alt="Red Lodge"
                data-lat="45.185882568359375" data-lng="-109.24681854248047" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="72" name="Livingston" shape="poly" coords="364,396,463,366,457,353,378,377,371,364,362,368,366,382,360,384" alt="Livingston"
                data-lat="45.66151428222656" data-lng="-110.55998992919922" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="73" name="Dillon" shape="poly" coords="178,400,234,390,235,403,222,406,224,416,213,419,211,409,181,413" alt="Dillon"
                data-lat="45.21670913696289" data-lng="-112.63894653320312" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="74" name="Ennis" shape="poly" coords="265,383,315,382,309,409,301,409,299,397,265,397" alt="Ennis"
                data-lat="45.34919738769531" data-lng="-111.73190307617188" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="75" name="Malta" shape="poly" coords="554,110,609,110,607,99,572,98,572,80,564,80,565,96,558,97" alt="Malta"
                data-lat="48.359832763671875" data-lng="-107.8742904663086" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="76" name="West Yellowstone" shape="poly" coords="220,452,252,446,248,433,287,425,288,438,331,432,335,443,225,464" alt="West Yellowstone"
                data-lat="44.662269592285156" data-lng="-111.10411071777344" />
              </button>
            </map>
        </div>
    )
}


