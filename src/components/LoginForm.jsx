import { useContext, useState } from "react";
// import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const LoginForm = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   select1: "",
  //   select2: "",
  //   select3: "",
  //   select4: "",
  //   saleId: "",
  //   password: "",
  // });
  const { data, setData } = useContext(FormContext);

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
            <option value="" className="bg-gray-400">
              Select Option 1
            </option>
            <option value="Option 1" className="bg-gray-400">
              Option 1
            </option>
            <option value="Option 2" className="bg-gray-400">
              Option 2
            </option>
          </select>

          <select
            id="select2"
            name="select2"
            value={data.select2}
            onChange={handleOnChange}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="" className="bg-gray-400">
              Select Option 2
            </option>
            <option value="Option A" className="bg-gray-400">
              Option A
            </option>
            <option value="Option B" className="bg-gray-400">
              Option B
            </option>
          </select>

          <select
            id="select3"
            name="select3"
            value={data.select3}
            onChange={(e) => setData({ ...data, outletId: e.target.value })}
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          >
            <option value="Option A" className="bg-gray-400">
              Select Option 3
            </option>
            <option value="Option X" className="bg-gray-400">
              Option X
            </option>
            <option value="Option Y" className="bg-gray-400">
              Option Y
            </option>
          </select>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="userId"
            name="userId"
            value={data.userId}
            onChange={handleOnChange}
            placeholder="Enter Sale Person ID Here"
            required
            className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            // onChange={handleOnChange}
            placeholder="Enter Password Here"
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
