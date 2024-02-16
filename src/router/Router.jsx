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
import Layout from "../Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route element={<PrivateRoute component={Layout} />}>
          <Route path="game-select" element={<GameSelect />} />
          <Route path="data" element={<UserData />} />
          <Route path="can" element={<CanGame />} />
          <Route path="spin" element={<SpinWheel />} />
          <Route path="*" element={<Navigate to="login" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
