import axios from "axios";

function postAnalytics({ userId, type, data }) {
  axios.post("/api/users/userAction", { userId, type, data });
}
export default postAnalytics;
