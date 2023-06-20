import { LanguageProvider } from "../components/Translation";
import { Outlet, useParams } from "react-router-dom";
import UserProvider from "../providers/UserProvider";
import Header from "../components/User/Header";

function UserLayout() {
  const { userId } = useParams();

  return (
    <LanguageProvider>
      <UserProvider userId={userId}>
        <Header />
        <Outlet />
      </UserProvider>
    </LanguageProvider>
  );
}

export default UserLayout;
