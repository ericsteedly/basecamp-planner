import "../Maps.css"

export default function NewMexico({ handleBaseClick }) {

    return (
        <div className="state-container">
          <img src="assets/NEWMEXICO.png" alt="State Map of New Mexico" width="472" height="541" useMap="#Map"/>
            <map name="Map">
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="77" name="Santa Fe" shape="poly" coords="243,146,316,146,315,133,251,131,241,117,235,121,242,134" alt="Santa Fe"
              data-location="35.687095642089844,-105.9378433227539" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="78" name="Albuquerque" shape="poly" coords="91,208,210,208,209,193,188,193,188,178,177,179,175,193,94,194" alt="Albuquerque"
              data-location="35.08452606201172,-106.65045166015625" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="79" name="Taos" shape="poly" coords="289,52,328,52,326,65,298,66,298,78,284,77" alt="Taos"
              data-location="36.40730667114258,-105.57340240478516" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="80" name="Los Alamos" shape="poly" coords="133,99,228,81,230,95,213,98,215,109,204,112,202,102,135,113" alt="Los Alamos"
              data-location="35.880149841308594,-106.30311584472656" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="81" name="Las Cruces" shape="poly" coords="159,451,249,436,246,423,178,433,172,421,163,424,164,436,157,438" alt="Las Cruces"
              data-location="32.320030212402344,-106.763671875" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="82" name="Silver City" shape="poly" coords="34,381,128,381,126,397,72,397,71,411,61,409,61,399,34,396" alt="Silver City"
              data-location="32.770118713378906,-108.28033447265625" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
              <area id="83" name="Ruidoso" shape="poly" coords="253,306,321,318,320,331,271,323,268,336,261,333,263,322,251,319" alt="Ruidoso"
              data-location="33.36734390258789,-105.65885925292969" />
              </button>
            </map>
        </div>
    )
}
