import React from "react";
import LoginForm from "../components/LoginForm";
import GameSelect from "../components/GameSelect";

const Login = () => {
  return (
    <main className=" bg-[url('/assets/login.png')] flex flex-col md:flex-row items-center login w-full md:w-[820px] h-screen md:h-[1180px] m-auto justify-center">
      <GameSelect />

      {/* <LoginForm /> */}
    </main>
  );
};

export default Login;
