import React from "react";

const UserData = () => {
  return (
    <div className="w-[46%]  mx-auto ">
      <form action="/submit" method="post" className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="text1"
            name="text1"
            placeholder="Name"
            required
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          />

          <input
            type="text"
            id="text1"
            name="text1"
            placeholder="Phone Number"
            required
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
