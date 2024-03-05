import "../Maps.css"

export default function Maine({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/MAINE.png" alt="State Map of Maine" width="378" height="534" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="59" name="Bar Harbor" shape="poly" coords="237,386,238,399,338,393,335,381,259,384,260,365,250,366,251,383" alt="Bar Harbor"
            data-lat="44.387725830078125" data-lng="-68.2039566040039" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="60" name="Milinocket" shape="poly" coords="188,188,281,201,278,215,240,211,238,224,225,221,230,209,187,201" alt="Milinocket"
            data-lat="45.65742111206055" data-lng="-68.70982360839844" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="61" name="Bethel" shape="poly" coords="46,339,104,346,102,361,61,357,59,369,49,367,52,356,45,352" alt="Bethel"
            data-lat="44.40457534790039" data-lng="-70.78990936279297" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="62" name="Rangeley" shape="poly" coords="47,276,128,275,126,291,65,291,56,303,50,297" alt="Rangeley"
            data-lat="44.965789794921875" data-lng="-70.6427001953125" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="63" name="Camden" shape="poly" coords="124,369,191,369,189,383,185,397,175,394,178,382,125,384" alt="Camden"
            data-lat="44.20989990234375" data-lng="-69.0648193359375" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="64" name="Greenville" shape="poly" coords="81,222,174,213,177,227,154,230,153,242,145,242,142,229,83,236" alt="Greenville"
            data-lat="45.45962142944336" data-lng="-69.59061431884766" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="65" name="Portland" shape="poly" coords="4,443,3,457,81,469,96,458,88,452,81,455" alt="Portland"
            data-lat="43.65924835205078" data-lng="-70.25684356689453" />
          </button>
        </map>
    </div>
  )
}


