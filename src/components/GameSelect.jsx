// import React from "react";

import { useNavigate } from "react-router-dom";

const GameSelect = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/can");
    // e.preventDefault();
    // mutate(data);
  };

  return (
    <div className="w-full flex justify-evenly items-center px-10 gap-x-10">
      <div className="flex flex-col items-center space-y-10 hover:scale-105 transition duration-300">
        <img src="/assets/spin.png" alt="spin" />
        <img src="/assets/spintext.png" alt="spin text" />
      </div>
      <div
        onClick={handleClick}
        className="flex flex-col items-center space-y-10 hover:scale-105 transition duration-300"
      >
        <img src="/assets/can.png" alt="can" />
        <img src="/assets/cantext.png" alt="can text" />
      </div>
    </div>
  );
};

export default GameSelect;
