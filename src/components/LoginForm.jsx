import { useState } from "react";
// import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    select1: "",
    select2: "",
    select3: "",
    select4: "",
    text1: "",
  });

  const { mutate } = useMutation(
    (data) => {
      // Make API call here using Axios or fetch
      console.log("Form data submitted:", data);
    },
    {
      onSuccess: () => {
        // Handle success if needed
      },
      onError: (error) => {
        // Handle error if needed
        console.error("Error occurred:", error);
      },
    }
  );

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    navigate("/game-select");
    // e.preventDefault();
    // mutate(data);
  };

  return (
    <div className="w-[46%]  mx-auto justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-4">
          <select
            id="select1"
            name="select1"
            value={data.select1}
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg outline-none text-white"
          >
            <option value="" disabled>
              Select Option 1
            </option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>

          <select
            id="select2"
            name="select2"
            value={data.select2}
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" disabled>
              Select Option 2
            </option>
            <option value="Option A">Option A</option>
            <option value="Option B">Option B</option>
          </select>

          <select
            id="select3"
            name="select3"
            value={data.select3}
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" disabled>
              Select Option 3
            </option>
            <option value="Option X">Option X</option>
            <option value="Option Y">Option Y</option>
          </select>
        </div>
        <div className="flex flex-col space-y-4">
          <select
            id="select4"
            name="select4"
            value={data.select4}
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" disabled>
              Select Option 4
            </option>
            <option value="Option P">Option P</option>
            <option value="Option Q">Option Q</option>
          </select>

          <input
            type="text"
            id="text1"
            name="text1"
            value={data.text1}
            onChange={handleOnChange}
            placeholder="Enter text here"
            required
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          />

          <button
            type="submit"
            className="bg-[#036738] border-2 text-white py-2 px-4 rounded-lg w-28 h-14 ml-auto"
            // onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
