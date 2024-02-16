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
import PrivateRoute from "../hocs/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/data" element={<PrivateRoute component={UserData} />} />
        <Route
          path="/game-select"
          element={<PrivateRoute component={GameSelect} />}
        />
        <Route path="/can" element={<PrivateRoute component={CanGame} />} />
        <Route path="/spin" element={<PrivateRoute component={SpinWheel} />} />
        <Route path="*" element={<Navigate to="/game-select" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
