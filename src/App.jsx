// import { useState } from "react";

import "./App.css";
// import GameSelect from "./components/GameSelect";
// import LoginForm from "./components/LoginForm";
// import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative bg-[#003F1E] bg-no-repeat bg-center min-h-screen flex justify-center items-center ">
        <div className="absolute left-0 top-0 w-[40%]">
          <div className="game-text-bg bg-[#FF9900]/80 md:p-[2rem_2rem_3rem_2rem] p-[1rem_2rem_2rem_1rem] ">
            <img
              src="/assets/game.png"
              alt="beer game logo"
              className="md:w-[80%] w-full"
            />
          </div>
          <img
            src="/assets/logo.png"
            alt="logo"
            className="ml-auto -mt-5 md:-mt-10 z-20 relative w-20 md:w-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center login w-full h-full justify-center">
          {/* <GameSelect /> */}
          <RouterProvider router={router} />
          {/* <LoginForm /> */}
        </div>
        <img
          src="/assets/karawake.png"
          alt="karawake"
          className="absolute right-0 bottom-0"
        />
      </main>
    </QueryClientProvider>
  );
}

export default App;
