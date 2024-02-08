import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Company from "@/pages/company/Company";
// import Career from "@/pages/company/Career";
// import OurStory from "@/pages/company/OurStory";
import LoginForm from "../components/LoginForm";
import GameSelect from "../components/GameSelect";
import UserData from "../components/UserData";
import SpinGame from "../components/SpinGame";
import CanGame from "../components/CanGame";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginForm />} />
      <Route path="game-select" element={<GameSelect />} />
      <Route path="users" element={<UserData />} />
      <Route path="spin-game" element={<SpinGame />} />
      <Route path="can-game" element={<CanGame />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
