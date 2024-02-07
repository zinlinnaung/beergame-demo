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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginForm />} />
      <Route path="game-select" element={<GameSelect />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
