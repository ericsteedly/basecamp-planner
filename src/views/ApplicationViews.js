import NavBar from "../components/navBar/NavBar";
import USA from "../components/maps/USA";
import { Outlet, Route, Routes } from "react-router-dom";
import Utah from "../components/maps/Utah";
import Arizona from "../components/maps/Arizona";
import California from "../components/maps/California";
import Idaho from "../components/maps/Idaho";
import Montana from "../components/maps/Montana";
import Nevada from "../components/maps/Nevada";
import NewMexico from "../components/maps/NewMexico";

export default function ApplicationViews() {
    return(
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<USA />}/>
                <Route path="utah" element={<Utah />} />
                <Route path="arizona" element={<Arizona />} />
                <Route path="california" element={<California />} />
                <Route path="idaho" element={<Idaho />} />
                <Route path="montana" element={<Montana />} />
                <Route path="nevada" element={<Nevada />} />
                <Route path="newMexico" element={<NewMexico />} />
            </Route>
        </Routes>
    )
}

