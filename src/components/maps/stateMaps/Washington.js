import "../Maps.css"

export default function Washington({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/WASHINGTON.png" alt="State Map of Washington" width="784" height="518" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="117" name="Colville" shape="poly" coords="640,64,711,72,708,87,676,83,674,99,664,97,666,83,638,77" alt="Colville"
            data-lat="48.54511260986328" data-lng="-117.90100860595703" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="118" name="Spokane" shape="poly" coords="658,217,659,231,731,230,732,217,722,217,726,202,716,204,716,216" alt="Spokane"
            data-lat="47.65810012817383" data-lng="-117.42353057861328" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="119" name="Seattle" shape="poly" coords="258,142,252,169,263,170,269,158,332,156,327,143" alt="Seattle"
            data-lat="47.60626220703125" data-lng="-122.33281707763672" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="120" name="Leavenworth" shape="poly" coords="382,138,496,117,498,131,407,147,409,158,400,159,398,148,384,150" alt="Leavenworth"
            data-lat="47.59630584716797" data-lng="-120.66145324707031" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="121" name="Bellingham" shape="poly" coords="227,24,328,35,326,48,246,40,243,52,235,51,237,39,227,37" alt="Bellingham"
            data-lat="48.752052307128906" data-lng="-122.4786605834961" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="122" name="Tacoma" shape="poly" coords="234,200,310,211,307,199,236,188" alt="Tacoma"
            data-lat="47.252986907958984" data-lng="-122.44424438476562" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="123" name="Olympia" shape="poly" coords="142,221,197,213,202,199,212,201,213,221,146,234" alt="Olympia"
            data-lat="47.0380859375" data-lng="-122.9007568359375" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="124" name="Ellensburg" shape="poly" coords="355,225,406,224,407,208,418,207,418,223,453,224,454,238,354,238" alt="Ellensburg"
            data-lat="46.996639251708984" data-lng="-120.54784393310547" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="125" name="Port Angeles" shape="poly" coords="64,152,139,151,138,138,148,137,148,152,178,151,177,164,64,164" alt="Port Angeles"
            data-lat="48.118247985839844" data-lng="-123.4307632446289" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="126" name="Wenatchee" shape="poly" coords="443,169,536,169,534,184,443,183,428,169,433,162" alt="Wenatchee"
            data-lat="47.42361831665039" data-lng="-120.31041717529297" />
          </button>
        </map>
    </div>
  )
}


