import "../Maps.css"

export default function Tennessee({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/TENNESSEE.png" alt="State Map of Tennessee" width="818" height="222" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="110" name="Gatlinburg" shape="poly" coords="516,120,517,133,613,133,629,122,622,115,613,122" alt="Gatlinburg"
          data-lat="35.71438980102539" data-lng="-83.51016235351562" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="111" name="Chattanooga" shape="poly" coords="354,171,465,171,480,187,474,192,463,184,354,183" alt="Chattanooga"
          data-lat="35.045902252197266" data-lng="-85.30941009521484" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="112" name="Knoxville" shape="poly" coords="553,81,642,80,642,95,601,96,600,107,589,106,589,95,554,95" alt="Knoxville"
          data-lat="35.9606819152832" data-lng="-83.92079162597656" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="113" name="Nashville" shape="poly" coords="299,80,298,94,384,94,384,80,342,80,343,63,333,64,332,81" alt="Nashville"
          data-lat="36.16276931762695" data-lng="-86.78163146972656" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="114" name="Cookeville" shape="poly" coords="404,46,500,56,498,69,453,64,450,75,440,73,440,63,406,59" alt="Cookeville"
          data-lat="36.162899017333984" data-lng="-85.50164031982422" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="115" name="Johnson City" shape="poly" coords="634,45,746,34,764,38,762,48,742,46,637,57" alt="Johnson City"
          data-lat="36.313568115234375" data-lng="-82.35345458984375" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
          <area id="116" name="Memphis" shape="poly" coords="24,188,21,166,30,164,33,176,96,167,97,179" alt="Memphis"
          data-lat="35.149658203125" data-lng="-90.04898071289062" />
          </button>
        </map>
    </div>
  )
}
