import "../Maps.css"

export default function Colorado({ handleBaseClick }) {
    return (
        <div className="state-container">
          <img src="assets/COLORADO.png" alt="State Map of Colorado" width="711" height="537" useMap="#Map"/>
            <map name="Map">
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="33" name="Aspen" shape="poly" coords="242,230,283,229,285,215,295,215,293,228,292,244,240,245" alt="Aspen"
                data-lat="39.19126510620117" data-lng="-106.81758880615234" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="34" name="Boulder" shape="poly" coords="410,160,484,160,483,146,419,144,418,131,407,131" alt="Boulder"
                data-lat="40.01509094238281" data-lng="-105.27051544189453" />  
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="35" name="Estes Park" shape="poly" coords="299,78,390,78,390,89,397,98,387,102,382,92,299,93" alt="Estes Park"
                data-lat="40.37739562988281" data-lng="-105.52166748046875" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="36" name="Durango" shape="poly" coords="232,476,153,476,147,469,138,475,151,483,154,489,231,488" alt="Durango"
                data-lat="37.27538299560547" data-lng="-107.88005828857422" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="37" name="Glenwood Springs" shape="poly" coords="76,163,235,146,237,161,215,165,218,177,207,178,203,167,77,176" alt="Glenwood Springs"
                data-lat="39.55069351196289" data-lng="-107.3248291015625" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="38" name="Leadville" shape="poly" coords="331,193,412,203,411,215,339,211,333,221,323,216,330,207" alt="Leadville"
                data-lat="39.25102996826172" data-lng="-106.29254150390625" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="39" name="Telluride" shape="poly" coords="84,395,154,394,156,383,167,383,166,409,87,410" alt="Telluride"
                data-lat="37.93767166137695" data-lng="-107.81227111816406" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}>
                <area id="40" name="Salida" shape="poly" coords="338,316,346,314,341,297,353,296,355,314,393,312,394,326,338,329" alt="Salida"
                data-lat="38.53486251831055" data-lng="-105.99895477294922" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}> 
                <area id="41" name="Ouray" shape="poly" coords="167,348,223,354,217,369,191,366,187,377,178,375,180,366,166,361" alt="Ouray"
                data-lat="38.02291488647461" data-lng="-107.67139434814453" />
              </button>
              <button className="base-btn" onClick={handleBaseClick}> 
                <area id="42" name="Fort Collins" shape="poly" coords="440,51,546,63,541,78,448,67,437,78,429,72,436,64" alt="Fort Collins"
                data-lat="40.58540725708008" data-lng="-105.0844955444336" />
              </button>
            </map>
        </div>
    )
}



  
  
  
  
  
  
  
  
  
  
