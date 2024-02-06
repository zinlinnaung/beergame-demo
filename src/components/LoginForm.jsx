import React from "react";

const LoginForm = () => {
  return (
    <div className="w-[46%]  mx-auto justify-center">
      <form action="/submit" method="post" className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-4">
          <select
            id="select1"
            name="select1"
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg outline-none text-white"
          >
            <option value="" selected className=" text-black ">
              Select Option 1
            </option>
            <option value="">Select Option 1</option>
          </select>

          <select
            id="select2"
            name="select2"
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" selected>
              Select Option 2
            </option>
          </select>

          <select
            id="select3"
            name="select3"
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" disabled selected>
              Select Option 3
            </option>
          </select>
        </div>
        <div className="flex flex-col space-y-4">
          <select
            id="select4"
            name="select4"
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" disabled selected>
              Select Option 4
            </option>
          </select>

          <input
            type="text"
            id="text1"
            name="text1"
            placeholder="Enter text here"
            required
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          />

          <button
            type="submit"
            className=" bg-[#036738] border-2  text-white py-2 px-4 rounded-lg w-28 h-14 ml-auto"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
