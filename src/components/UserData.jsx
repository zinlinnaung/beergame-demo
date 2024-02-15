import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const UserData = () => {
  const { nextRoute } = useLocation().state;
  const navigate = useNavigate();
  const { data, setData } = useContext(FormContext);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-[46%]  mx-auto ">
      <form
        onSubmit={() => navigate(nextRoute)}
        method="post"
        className="flex flex-col space-y-16"
      >
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          />

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          />

          <button
            type="submit"
            className=" bg-[#036738] border-2  text-white py-2 px-4 rounded-lg w-28 h-14 ml-auto"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserData;
