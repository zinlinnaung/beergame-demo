import React from "react";

const GameSelect = () => {
  return (
    <div className="w-full flex justify-evenly items-center px-10 gap-x-10">
      <div className="flex flex-col items-center space-y-10">
        <img src="/assets/spin.png" alt="spin" />
        <img src="/assets/spintext.png" alt="spin text" />
      </div>
      <div className="flex flex-col items-center space-y-10">
        <img src="/assets/can.png" alt="can" />
        <img src="/assets/cantext.png" alt="can text" />
      </div>
    </div>
  );
};

export default GameSelect;
