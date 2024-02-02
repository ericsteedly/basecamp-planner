import Arizona from "../stateMaps/Arizona";
import California from "../stateMaps/California";
import Nevada from "../stateMaps/Nevada";
import NewMexico from "../stateMaps/NewMexico";
import Utah from "../stateMaps/Utah";

export default function StateMapArray({ handleBaseClick }) {
    const array =   [
                        {
                            id: 1,
                            src: <Utah handleBaseClick={handleBaseClick}/>
                        },
                        {
                            id: 2,
                            src: <Arizona handleBaseClick={handleBaseClick}/>
                        },
                        {
                            id: 3,
                            src: <California handleBaseClick={handleBaseClick}/>
                        },
                        {
                            id: 4,
                            src: <Nevada handleBaseClick={handleBaseClick}/>
                        },
                        {
                            id: 5,
                            src: <NewMexico handleBaseClick={handleBaseClick}/>
                        }
                    ]
    return array
}