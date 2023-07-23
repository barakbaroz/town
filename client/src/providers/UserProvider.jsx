import { createContext } from "react";
import useUserInfo from "../hooks/useUserInfo";
import Loader from "../components/Loader";
import PropTypes from "prop-types";
import Error from "../components/Error";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const { loading, error, userInfo, updateCase } = useUserInfo();

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <userContext.Provider value={{ ...userInfo, updateCase }}>
      {children}
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
  userId: PropTypes.string,
};

export default UserProvider;
