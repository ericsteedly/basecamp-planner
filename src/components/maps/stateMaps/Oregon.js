import "../Maps.css"

export default function Oregon({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/OREGON.png" alt="State Map of Oregon" width="666" height="502" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="100" name="Portland" shape="poly" coords="98,120,180,118,180,106,164,106,164,92,155,92,153,104,100,107" alt="Portland"
            data-lat="45.51536560058594" data-lng="-122.6783676147461" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="101" name="Bend" shape="poly" coords="245,232,288,232,289,245,269,247,268,260,258,260,259,246,245,245" alt="Bend"
            data-lat="44.058258056640625" data-lng="-121.31535339355469" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="102" name="Eugene" shape="poly" coords="80,261,81,274,142,273,137,244,126,247,126,261" alt="Eugene"
            data-lat="44.05217742919922" data-lng="-123.08674621582031" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="103" name="Ashland" shape="poly" coords="108,452,181,438,182,467,171,467,170,455,109,463" alt="Ashland"
            data-lat="42.19464111328125" data-lng="-122.70946502685547" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="104" name="Hood River" shape="poly" coords="225,103,245,99,243,84,252,82,257,96,319,87,322,97,229,115" alt="Hood River"
            data-lat="45.70893096923828" data-lng="-121.5123062133789" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="105" name="Astoria" shape="poly" coords="74,45,79,20,89,20,87,33,141,33,140,46" alt="Astoria"
            data-lat="46.18791198730469" data-lng="-123.83126068115234" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="106" name="Joseph" shape="poly" coords="562,122,622,122,620,108,596,110,594,94,585,95,584,108,565,110" alt="Joseph"
            data-lat="45.354393005371094" data-lng="-117.2296142578125" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="107" name="Klamath Falls" shape="poly" coords="234,427,356,449,350,462,252,445,247,455,238,453,242,443,229,439" alt="Klamath Falls"
            data-lat="42.2249870300293" data-lng="-121.7816390991211" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="108" name="Burns" shape="poly" coords="405,310,407,321,460,322,458,308,438,309,437,292,428,294,427,307" alt="Burns"
            data-lat="43.58637619018555" data-lng="-119.05414581298828" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="109" name="John Day" shape="poly" coords="430,183,433,207,444,210,445,196,502,201,506,190" alt="John Day"
            data-lat="44.41605758666992" data-lng="-118.95301818847656" />
          </button>
        </map>
    </div>
  )
}



