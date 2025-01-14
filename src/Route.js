import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home_Page/home";
import Registration from "./pages/Registration/registration";
import Login from "./pages/Login/login";
import Timer from "./pages/Timer/timer";
import Clues from "./pages/Clues";
import EVIDENCE_ROOM from "./pages/EvidenceRoom";
 import PROFILES from "./pages/Profiles";
import GAME from "./pages/Game";
import LOCATIONS from "./pages/Locations";
import LEADERBOARD from "./pages/Leaderboard";
import KILL_CODE from "./pages/KillCode";
const ReactRouterSetup = () => {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/clues" element={<Clues />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/timer" element={<Timer />} />
          <Route exact path="/evidence" element={<EVIDENCE_ROOM />} />
          <Route exact path="/profiles" element={<PROFILES />} />
          {/* <Route exact path="/rules" element={<RULES />} /> */}
          <Route exact path="/game" element={<GAME />} />
          <Route exact path="/locations" element={<LOCATIONS />} />
          <Route exact path="/leaderboard" element={<LEADERBOARD/>} />
          <Route exact path="/killcode" element={<KILL_CODE/>} />
        </Routes>
      </>
    );
}

export default ReactRouterSetup;