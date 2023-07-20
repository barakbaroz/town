import axios from "axios";

function postAnalytics({ type }) {
  axios.post("/api/users/userAction", { type });
}
export default postAnalytics;
