import "../Maps.css"

export default function Wyoming({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/WYOMING.png" alt="State Map of Wyoming" width="645" height="510" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="127" name="Jackson" shape="poly" coords="36,162,105,162,105,175,68,175,67,188,56,187,58,176,38,175" alt="Jackson"
            data-location="43.47999954223633,-110.76335144042969" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="128" name="Cody" shape="poly" coords="163,61,205,54,204,66,194,68,195,78,186,81,183,72,166,72" alt="Cody"
            data-location="44.52655792236328,-109.05660247802734" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="129" name="Lander" shape="poly" coords="230,272,292,271,290,259,233,259,224,251,218,258" alt="Lander"
            data-location="42.83314895629883,-108.7307357788086" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="130" name="Dubois" shape="poly" coords="138,192,197,187,194,174,159,176,156,164,146,167,148,179,140,180" alt="Dubois"
            data-location="43.533687591552734,-109.63046264648438" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="131" name="Pinedale" shape="poly" coords="57,251,120,260,124,246,134,248,133,276,53,265" alt="Pinedale"
            data-location="42.86809158325195,-109.86341094970703" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="132" name="Buffalo" shape="poly" coords="342,104,408,89,416,80,424,87,412,99,346,117" alt="Buffalo"
            data-location="44.348506927490234,-106.69895935058594" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="133" name="Sheridan" shape="poly" coords="483,30,483,43,406,45,397,53,390,45,405,33" alt="Sheridan"
            data-location="44.79730987548828,-106.95613861083984" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="134" name="Casper" shape="poly" coords="415,297,470,286,467,274,451,278,449,260,439,263,445,280,411,287" alt="Casper"
            data-location="42.848880767822266,-106.29804992675781" />
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="135" name="Sundance" shape="poly" coords="515,124,516,137,600,136,598,123,553,123,553,105,541,106,543,123" alt="Sundance"
            data-location="44.40653610229492,-104.37581634521484" />
          </button>
        </map>
    </div>
  )
}

