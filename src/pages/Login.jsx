import React from "react";

const Login = () => {
  return (
    <main className="flex items-center justify-center h-screen login">
      <div className="w-[50%]">
        <form
          action="/submit"
          method="post"
          className="flex flex-col space-y-16"
        >
          <div className="flex flex-col space-y-4">
            <select
              id="select1"
              name="select1"
              className="border-white border p-2 bg-[rgba(255,255,255,0.5)] rounded-lg outline-none"
            >
              <option value="" className="w-full">
                Select Option 1
              </option>
              <option value="">Select Option 1</option>
            </select>

            <select
              id="select2"
              name="select2"
              className="border-white border p-2 bg-[rgba(255,255,255,0.5)] rounded-lg w-full outline-none"
            >
              <option value="" disabled selected>
                Select Option 2
              </option>
            </select>

            <select
              id="select3"
              name="select3"
              className="border-white border p-2 bg-[rgba(255,255,255,0.5)] rounded-lg w-full outline-none"
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
              className="border-white border p-2 bg-[rgba(255,255,255,0.5)] rounded-lg w-full outline-none"
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
              className="border-white border p-2 bg-[rgba(255,255,255,0.5)] rounded-lg w-full outline-none"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
