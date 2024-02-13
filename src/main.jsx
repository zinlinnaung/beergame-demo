import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Backdrop from "./pages/Backdrop.jsx";
// import { Loading } from "./pages/Loading.jsx";
// import Login from "./pages/Login.jsx";
import { RecoilRoot } from "recoil";
import { Toaster } from "./components/ui/toaster.jsx";
// import { QueryClientProvider } from "react-query";
// import { Toaster } from "./components/ui/toaster.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Toaster>
        <App />
      </Toaster>
    </RecoilRoot>
  </React.StrictMode>
);
