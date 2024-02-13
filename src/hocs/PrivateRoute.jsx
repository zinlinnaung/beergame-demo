import authAtom from "../recoil/auth/auth.atom";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

function PrivateRoute({ component: Component }) {
  const auth = useRecoilValue(authAtom);
  if (auth) {
    return <Component />;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default PrivateRoute;
