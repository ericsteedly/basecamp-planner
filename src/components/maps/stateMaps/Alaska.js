import "../Maps.css"

export default function Alaska({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/ALASKA.png" alt="State Map of Alaska" width="909" height="505" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="25" name="Anchorage" shape="poly" coords="581,287,674,287,673,300,592,303,587,314,576,311,579,300" alt="Anchorage"
            data-lat="61.21768569946289" data-lng="-149.89971923828125" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="26" name="Juneau" shape="poly" coords="810,375,871,375,873,387,818,391,812,400,800,396,810,388" alt="Juneau"
            data-lat="58.30058288574219" data-lng="-134.420166015625" />  
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="27" name="Fairbanks" shape="poly" coords="533,162,623,158,621,185,608,185,609,174,532,177" alt="Fairbanks"
            data-lat="64.84013366699219" data-lng="-147.71998596191406" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="28" name="Talkeenta" shape="poly" coords="495,254,586,247,588,262,580,263,581,273,570,273,569,264,499,269" alt="Talkeenta"
            data-lat="62.32101821899414" data-lng="-150.10667419433594" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="29" name="Homer" shape="poly" coords="484,333,542,333,544,342,563,346,563,356,542,348,486,346" alt="Homer"
            data-lat="59.6482048034668" data-lng="-151.5299072265625" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="30" name="Seward" shape="poly" coords="600,349,659,358,658,371,593,366,593,355,587,343,597,340" alt="Seward"
            data-lat="60.10489273071289" data-lng="-149.44215393066406" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="31" name="Sitka" shape="poly" coords="751,432,791,432,798,419,807,425,799,435,797,445,749,446" alt="Sitka"
            data-lat="57.053314208984375" data-lng="-135.33453369140625" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="32" name="Healy"shape="poly" coords="589,201,590,215,653,224,658,212" alt="Healy"
            data-lat="63.869842529296875" data-lng="-149.02154541015625" />  
          </button>
          </map>
    </div>
  )
}

