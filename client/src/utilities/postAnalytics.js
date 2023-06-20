import axios from "axios";

function postAnalytics({ userId, type }) {
  axios.post("/api/users/userAction", { userId, type });
}
export default postAnalytics;
