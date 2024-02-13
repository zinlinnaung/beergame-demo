import {
  Navigate,
  Route,
  // RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Company from "@/pages/company/Company";
// import Career from "@/pages/company/Career";
// import OurStory from "@/pages/company/OurStory";
// import LoginForm from "../components/LoginForm";
import GameSelect from "../components/GameSelect";
import UserData from "../components/UserData";
// import SpinGame from "../components/SpinGame";
// import CanGame from "../components/CanGame";
import SpinWheel from "../components/SpinWheel";
// import Backdrop from "../pages/Backdrop";
// import Login from "../pages/Login";
import PrivateRoute from "../hocs/PrivateRoute";
import CanGame from "../components/CanGame";
// import Backdrop from "../pages/Backdrop";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route>
    //   <Route path="/" element={<LoginForm />} />
    //   <Route path="game-select" element={<GameSelect />} />
    //   <Route path="users" element={<UserData />} />
    //   <Route path="spin-game" element={<SpinWheel />} />
    //   <Route path="can-game" element={<CanGame />} />
    //   {/* <Route path="spin-game" element={<SpinWheel />} /> */}
    // </Route>

    <Route path="/" element={<CanGame />}>
      {/* <Route index element={<Backdrop />} /> */}
      <Route path="/login" element={<SpinWheel />} />
      <Route path="/data" element={<PrivateRoute component={UserData} />} />
      <Route path="/spin" element={<PrivateRoute component={SpinWheel} />} />
      <Route
        path="/game-select"
        element={<PrivateRoute component={GameSelect} />}
      />
      <Route path="*" element={<Navigate to={"/data"} replace />} />
    </Route>
  )
);

export default router;
