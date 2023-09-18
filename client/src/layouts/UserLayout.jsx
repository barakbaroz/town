import { LanguageProvider } from "../components/Translation";
import { Outlet } from "react-router-dom";
import UserProvider from "../providers/UserProvider";
import Header from "../components/User/Header";
import { AnimatePresence } from "framer-motion";

export default function UserLayout() {
  return (
    <AnimatePresence mode="wait">
      <LanguageProvider>
        <UserProvider>
          <Header />
          <Outlet />
        </UserProvider>
      </LanguageProvider>
    </AnimatePresence>
  );
}
