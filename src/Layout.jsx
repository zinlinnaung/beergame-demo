import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="relative bg-[#8CBE3B]  bg-no-repeat bg-center  min-h-screen flex justify-center items-center ">
      <img
        src="/assets/ownLet2.png"
        alt="ownLet"
        className="md:w-[80%] xl:w-[40%] w-full mx-auto absolute left-0 top-0 "
      />
      <img
        src="/assets/ownLet1.png"
        alt="ownLet"
        className="md:w-[80%] xl:w-[40%] w-full mx-auto absolute right-0 top-0"
      />
      <img
        src="/assets/login-logo.png"
        alt="ownLet"
        className="md:w-[70%] xl:w-[40%] w-full mx-auto absolute  top-2 left-[13rem]"
      />
      <img
        src="/assets/campaign-logo.png"
        alt="ownLet"
        className="md:w-[50%] xl:w-[40%] w-full mx-auto absolute left-[19rem] top-[19rem]"
      />
      <div className="flex flex-col z-50 md:flex-row items-center login w-full h-full justify-center">
        <Outlet />
      </div>
      <img
        src="/assets/hinthar.png"
        alt="karawake"
        className="absolute right-0 bottom-0 z-0"
      />
       <img
        src="/assets/water-splash.png"
        alt="water-splash"
        className="absolute left-0 bottom-0 z-0"
      />
    </main>
  );
};

export default Layout;
