import { Link } from "react-router-dom";

const GameSelect = () => {
  return (
    <div className="w-full flex justify-evenly items-center px-10 gap-x-10">
      {/* <Link to={{ pathname: "/data", state: { nextRoute: "/spin" } }}> */}
      <Link to="/data" state={{ nextRoute: "/spin" }}>
        <div className="flex flex-col items-center space-y-10 hover:scale-105 transition duration-300">
          <img src="/assets/spin.png" alt="spin" />
          <img src="/assets/spintext.png" alt="spin text" />
        </div>
      </Link>
      <Link to="data" state={{ nextRoute: "/can-game" }}>
        <div className="flex flex-col items-center space-y-10 hover:scale-105 transition duration-300">
          <img src="/assets/can.png" alt="can" />
          <img src="/assets/cantext.png" alt="can text" />
        </div>
      </Link>
    </div>
  );
};

export default GameSelect;
