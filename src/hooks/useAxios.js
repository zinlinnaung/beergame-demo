import axios from "axios";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import jwtDecode from "jwt-decode";
import authAtom from "../recoil/auth/auth.atom";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

const useAxios = (props) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();
  const { toast } = useToast();

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${auth?.access_token}` },
    validateStatus: function (status) {
      return status <= 500;
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwtDecode(auth.access_token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const res = await axios.post(
      `${import.meta.env.VITE_APP_BACKEND_URL}/api/authentication/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${auth?.refresh_token}`,
        },
        validateStatus: function (status) {
          return status <= 500;
        },
      }
    );

    if (res.status === 200) {
      localStorage.setItem("myanmarbeer-auth", JSON.stringify(res.data));
      setAuth(res.data);
      req.headers.Authorization = `Bearer ${res.data.access_token}`;
    } else {
      setAuth(null);
      localStorage.removeItem("myanmarbeer-auth");
      navigate("/login");
    }
    return req;
  });

  axiosInstance.interceptors.response.use((res) => {
    if (res.config.method !== "get") {
      if (props?.toast) {
        toast({
          title:
            typeof res.data.message === "string"
              ? res.data.message
              : res.data.message[0],
          // description: "There was a problem with your request.",
        });
      }
    }
    return res;
  });

  return axiosInstance;
};

export default useAxios;
