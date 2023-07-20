import { LanguageProvider } from "../components/Translation";
import { Outlet } from "react-router-dom";
import UserProvider from "../providers/UserProvider";
import Header from "../components/User/Header";

function UserLayout() {
  return (
    <LanguageProvider>
      <UserProvider>
        <Header />
        <Outlet />
      </UserProvider>
    </LanguageProvider>
  );
}

export default UserLayout;
