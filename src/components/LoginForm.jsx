import { useContext, useState } from "react";
// import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import authAtom from "../recoil/auth/auth.atom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import stateCities from "../constants/StateCities.json";
import outlet from "../constants/outlet.json";

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
  const area = Object.keys(stateCities);
  const cities = stateCities[data.area];
  const state = Object.keys(outlet);
  const outletdata = outlet[data?.state];
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
  // console.log(stateCities);

  return (
    <main className="relative  min-h-screen bg-no-repeat bg-center flex justify-center items-center ">
      <img
        src="/assets/ownLet2.png"
        alt="ownLet"
        className="md:w-[80%] xl:w-[40%] w-full mx-auto absolute left-0 top-0 "
      />
      <img
        src="/assets/ownLet1.png"
        alt="ownLet"
        className="md:w-[80%] xl:w-[40%] w-full mx-auto absolute right-0 top-0"
      />
      <img
        src="/assets/login-logo.png"
        alt="ownLet"
        className="md:w-[70%] xl:w-[40%] w-full mx-auto absolute  top-2 md:left-[10rem] lg:left-[13rem]"
      />
      <img
        src="/assets/campaign-logo.png"
        alt="ownLet"
        className="md:w-[50%] xl:w-[40%] w-full mx-auto absolute left-[1rem] md:top-[12rem] lg:top-[19rem]"
      />

      <div className="flex flex-col z-50 md:flex-row items-center login w-full h-full justify-center">
        <div className="w-[60%]  mx-auto justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-16">
            <div className="flex flex-col space-y-4">
              {/* <label htmlFor="area">Area</label> */}
              <select
                id="area"
                name="area"
                value={data.area}
                onChange={handleOnChange}
                className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg outline-none text-black"
              >
                <option
                  // disabled
                  defaultValue=""
                  hidden
                  // selected
                  value=""
                  className="bg-gray-400"
                >
                  Area
                </option>
                {area?.map((item, index) => (
                  <option key={index} value={item} className="bg-gray-400">
                    {item}
                  </option>
                ))}
              </select>

              <select
                id="state"
                name="state"
                value={data.state}
                onChange={handleOnChange}
                className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-black"
              >
                <option
                  // disabled
                  defaultValue=""
                  hidden
                  // selected
                  value=""
                  className="bg-gray-400"
                >
                  State
                </option>
                {cities?.map((item, index) => (
                  <option key={index} value={item} className="bg-gray-400">
                    {item}
                  </option>
                ))}
              </select>

              <select
                id="select3"
                name="select3"
                value={data.select3}
                onChange={(e) =>
                  setData({ ...data, outletName: e.target.value })
                }
                className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-black"
              >
                <option
                  // disabled
                  defaultValue=""
                  hidden
                  // selected
                  value=""
                  className="bg-gray-400"
                >
                  Outlet
                </option>
                {outletdata?.map((item, index) => (
                  <option key={index} value={item} className="bg-gray-400">
                    {item}
                  </option>
                ))}
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
                className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-black"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={dataa.password}
                onChange={handleOnChange}
                placeholder="Enter Password Here"
                required
                className="border-white border-2 p-2 bg-[rgba(255,255,255,0.4)] rounded-lg w-full outline-none text-black"
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
        src="/assets/hinthar.png"
        alt="karawake"
        className="absolute right-0 bottom-0 z-0"
      />
      <img
        src="/assets/water-splash.png"
        alt="water-splash"
        className="absolute left-0 bottom-0 z-0"
      />
    </main>
  );
};

export default LoginForm;
