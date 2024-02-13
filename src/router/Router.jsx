import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import GameSelect from "../components/GameSelect";
import UserData from "../components/UserData";
import SpinWheel from "../components/SpinWheel";
import CanGame from "../components/CanGame";
import LoginForm from "../components/LoginForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/data" element={<UserData />} />
        <Route path="/game-select" element={<GameSelect />} />
        <Route path="/can" element={<CanGame />} />
        <Route path="/spin" element={<SpinWheel />} />
        <Route path="*" element={<Navigate to="/game-select" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
