import { useContext, useState } from "react";
// import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import authAtom from "../recoil/auth/auth.atom";
import axios from "axios";
import { useSetRecoilState } from "recoil";

const LoginForm = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authAtom);
  const [dataa, setDataa] = useState({
    sale_person_id: "",
    password: "",
  });
  // const [data, setData] = useState({
  //   select1: "",
  //   select2: "",
  //   select3: "",
  //   select4: "",
  //   saleId: "",
  //   password: "",
  // });
  const { data, setData } = useContext(FormContext);
  console.log(data);

  const { mutate } = useMutation(
    (data) => {
      return axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/authentication/login`,
        data,
        {
          validateStatus: function (status) {
            return status <= 500;
          },
        }
      );
    },
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          setAuth(res.data);
          localStorage.setItem("myanmarbeer-auth", JSON.stringify(res.data));
          navigate("/game-select");
        }
      },
      onError: (error) => {
        // Handle error if needed
        console.error("Error occurred:", error);
      },
    }
  );

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setDataa({ ...dataa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    navigate("/game-select");
    e.preventDefault();
    // mutate(dataa);
  };

  return (
    <main className="relative bg-[#003F1E] bg-no-repeat bg-center min-h-screen flex justify-center items-center ">
      <div className="absolute left-0 top-0 w-[40%]">
        <div className="game-text-bg bg-[#FF9900]/80 md:p-[2rem_2rem_3rem_2rem] p-[1rem_2rem_2rem_1rem] ">
          <img
            src="/assets/game.png"
            alt="beer game logo"
            className="md:w-[80%] w-full"
          />
        </div>
        <img
          src="/assets/logo.png"
          alt="logo"
          className="ml-auto -mt-5 md:-mt-10 z-20 relative w-20 md:w-auto"
        />
      </div>
      <div className="flex flex-col z-50 md:flex-row items-center login w-full h-full justify-center">
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
                id="sale_person_id"
                name="sale_person_id"
                value={dataa.sale_person_id}
                onChange={handleOnChange}
                placeholder="Enter Sale Person ID Here"
                required
                className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-white"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={dataa.password}
                onChange={handleOnChange}
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
      </div>
      <img
        src="/assets/karawake.png"
        alt="karawake"
        className="absolute right-0 bottom-0 z-0"
      />
    </main>
  );
};

export default LoginForm;
