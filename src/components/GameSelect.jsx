import React from "react";

const GameSelect = () => {
  return (
    <div className="w-full flex items-center m-auto ">
      <div className="m-auto flex flex-col items-center space-y-10">
        <div>
          <img src="/assets/spin.png" alt="" />
        </div>
        <div>
          <img src="/assets/spintext.png" alt="" />
        </div>
      </div>
      <div className="m-auto flex flex-col items-center space-y-10">
        <div>
          <img src="/assets/can.png" alt="" />
        </div>
        <div className="">
          <img src="/assets/cantext.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GameSelect;
