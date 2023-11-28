import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const localData = localStorage.getItem("token");
  const { pathname } = useLocation();

  console.log("şu anki path: ", pathname);

  return localData ? (
    children
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: pathname },
      }}
    />
  );
};

export default ProtectedPage;
