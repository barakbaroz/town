import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./stylings/fonts.css";
import Start from "./screens/Start";
import Legal from "./components/TOS/Legal";
import Panel from "./screens/Panel";
import Gister from "./screens/Gister";
import Login from "./screens/Login";
import UserLayout from "./layouts/UserLayout";
import ErrorElement from "./screens/ErrorElement";
import NotFound from "./screens/NotFound";
import CharacterSelection from "./screens/CharacterSelection";
import VideoPage from "./screens/VideoPage";
import panelLoader from "./Loaders/panelLoader";
import Questionnaire from "./screens/Questionnaire";
import QuestionnaireProvider from "./providers/QuestionnaireProvider";
import Privacy from "./components/TOS/Privacy";

const App = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  { path: "", element: <Navigate to="/Panel" /> },
  { path: "Login", element: <Login /> },
  {
    path: "Panel",
    element: <Panel />,
    loader: panelLoader,
    errorElement: <ErrorElement />,
  },
  { path: "Gister", element: <Gister /> },
  {
    path: "user",
    element: <UserLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "Start/:userId", element: <Start /> },
      { path: "Video", element: <VideoPage /> },
      { path: "Legal", element: <Legal /> },
      { path: "Privacy", element: <Privacy /> },

      { path: "CharacterSelection", element: <CharacterSelection /> },
      {
        path: "Questionnaire",
        children: [{ path: ":questionKey", element: <Questionnaire /> }],
        element: <QuestionnaireProvider />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default App;
