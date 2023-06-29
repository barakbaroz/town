import axios from "axios";

function postAnalytrics({ userId, type }) {
  axios.post(
    "/api/users/userAction",
    { userId, type },
    {
      headers: { "x-access-token": userId },
    }
  );
}
export default postAnalytrics;
