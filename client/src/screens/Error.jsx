import { useRouteError } from "react-router-dom";
import NotFound from "./NotFound";

function ErrorElement() {
  const error = useRouteError();
  console.log({ error });
  if (error.response?.statusText === "Not Found") return <NotFound />;
  return <h1>Error</h1>;
}

export default ErrorElement;
