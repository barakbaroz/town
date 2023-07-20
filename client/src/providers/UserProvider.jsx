import { createContext } from "react";
import useUserInfo from "../hooks/useUserInfo";
import Loader from "../components/Loader";
import PropTypes from "prop-types";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const { loading, userInfo, updateCase } = useUserInfo();

  if (loading) return <Loader />;

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
