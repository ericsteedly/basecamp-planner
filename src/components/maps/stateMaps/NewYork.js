import "../Maps.css"

export default function NewYork({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/NEWYORK.png" alt="State Map of New York" width="740" height="558" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="84" name="Lake Placid" shape="poly" coords="396,91,497,90,496,117,485,117,484,105,395,104" alt="Lake Placid"
            data-lat="44.279598236083984" data-lng="-73.97985076904297" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="85" name="Keene Valley" shape="poly" coords="482,139,483,153,594,152,596,141,517,139,514,123,506,124,507,140" alt="Keene Valley"
            data-lat="44.18999481201172" data-lng="-73.78662109375" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="86" name="North Creek" shape="poly" coords="388,172,387,184,494,198,500,174,492,172,487,183" alt="North Creek"
            data-lat="43.69792938232422" data-lng="-73.9859848022461" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="87" name="New Paltz" shape="poly" coords="450,436,539,436,534,423,521,424,518,408,509,410,509,423,451,423" alt="New Paltz"
            data-lat="41.74772262573242" data-lng="-74.08678436279297" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="88" name="Woodstock" shape="poly" coords="408,357,506,357,504,386,492,385,492,371,411,370" alt="Woodstock"
            data-lat="42.0410270690918" data-lng="-74.11821746826172" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="89" name="Ithaca" shape="poly" coords="266,315,321,305,324,319,301,325,304,335,294,336,292,325,269,328" alt="Ithaca"
            data-lat="42.44406509399414" data-lng="-76.50184631347656" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="90" name="Lake George" shape="poly" coords="409,241,409,229,502,226,508,214,516,220,512,229,512,240" alt="Lake George"
            data-lat="43.426265716552734" data-lng="-73.71237182617188" />
          </button>
        </map>
    </div>
  )
}


