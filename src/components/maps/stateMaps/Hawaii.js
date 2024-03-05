import "../Maps.css"

export default function Hawaii({ handleBaseClick }) {
  return (
    <div className="state-container">
      <img src="assets/HAWAII.png" alt="State Map of Hawaii" width="786" height="519" useMap="#Map"/>
        <map name="Map">
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="43" name="Hilo" shape="poly" coords="690,392,718,391,725,379,732,386,726,392,728,403,691,404" alt="Hilo"
            data-lat="19.721744537353516" data-lng="-155.0848846435547"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="44" name="Kailua-kona" shape="poly" coords="491,408,597,402,605,393,613,399,603,407,597,413,494,423" alt="Kailua-kona"
            data-lat="19.642044067382812" data-lng="-155.9962158203125"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="45" name="Lahaina" shape="poly" coords="451,252,510,234,509,214,519,215,515,232,518,242,453,265" alt="Lahaina"
            data-lat="20.88252067565918" data-lng="-156.68165588378906"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="46" name="Paia" shape="poly" coords="555,188,593,189,592,201,562,203,558,219,547,216,556,205" alt="Paia"
            data-lat="20.906208038330078" data-lng="-156.37399291992188"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="47" name="Honolulu" shape="poly" coords="263,164,341,164,344,148,351,149,349,163,349,179,265,179" alt="Honolulu"
            data-lat="21.31008529663086" data-lng="-157.858154296875"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="48" name="Kaneohe" shape="poly" coords="355,113,432,114,429,128,357,129,350,142,344,137,351,130" alt="Kaneohe"
            data-lat="21.403060913085938" data-lng="-157.79966735839844"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="49" name="Lihue" shape="poly" coords="192,58,188,72,145,71,131,65,128,59,134,54,145,60" alt="Lihue"
            data-lat="21.974382400512695" data-lng="-159.36729431152344"/>
          </button>
          <button className="base-btn" onClick={handleBaseClick}>
            <area id="50" name="Princeville" shape="poly" coords="144,7,243,7,242,19,141,20,121,30,119,21,142,16" alt="Princeville"
            data-lat="22.221698760986328" data-lng="-159.4815216064453"/>
          </button>
        </map> 
    s</div>
  )
}



