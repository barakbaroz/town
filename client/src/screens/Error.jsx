import { useRouteError, Navigate } from "react-router-dom";
import NotFound from "./NotFound";

function ErrorElement() {
  const error = useRouteError();
  console.log(error.response.statusText);
  if (error.response?.statusText === "Forbidden")
    return <Navigate to="/login" />;
  if (error.response?.statusText === "Not Found") return <NotFound />;
  return <h1>Error</h1>;
}

export default ErrorElement;
