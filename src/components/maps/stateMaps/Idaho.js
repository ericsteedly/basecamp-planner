import "../Maps.css"

export default function Idaho({ handleBaseClick }) {


    return (
        <div className="state-container">
          <img src="assets/IDAHO.png" alt="State Map of Idaho" width="350" height="541" useMap="#Map"/>
            <map name="Map">
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="51" name="Boise" shape="poly" coords="35,416,81,416,81,403,63,403,64,389,53,389,52,402,36,403" alt="Boise"
                data-lat="43.615142822265625" data-lng="-116.20231628417969" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="52" name="Ketchum" shape="poly" coords="136,407,213,407,212,393,164,392,164,380,152,380,153,392,137,394" alt="Ketchum"
                data-lat="43.68085479736328" data-lng="-114.36363220214844" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="53" name="McCall" shape="poly" coords="29,336,92,326,87,315,68,317,63,304,53,306,54,318,29,324" alt="McCall"
                data-lat="44.906333923339844" data-lng="-116.11717224121094" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="54" name="Idaho Falls" shape="poly" coords="225,436,323,414,318,402,277,411,276,393,265,398,270,412,224,424" alt="Idaho Falls"
                data-lat="43.49282455444336" data-lng="-112.04085540771484" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="55" name="Stanley" shape="poly" coords="96,334,162,346,158,358,111,352,107,361,97,357,99,351,93,348" alt="Stanley"
                data-lat="44.21558380126953" data-lng="-114.93523406982422" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="56" name="Salmon" shape="poly" coords="106,280,171,281,172,291,184,291,179,303,168,294,107,292" alt="Salmon"
                data-lat="45.175899505615234" data-lng="-113.89588165283203" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="57" name="Bonners Ferry" shape="poly" coords="34,62,38,76,170,45,170,34,67,54,62,38,52,43,56,56" alt="Bonners Ferry"
                data-lat="48.69143295288086" data-lng="-116.31632232666016" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="58" name="Coeur d'Alene" shape="poly" coords="36,139,156,141,155,125,56,123,56,114,47,115,45,124,40,126" alt="Coeur d'Alene"
                data-lat="47.67353439331055" data-lng="-116.78118896484375" />  
              </button>
            </map> 
        </div>
    )
}



  
  
  
  
  
  
  
  
