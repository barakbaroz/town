import axios from "axios";

function postAnalytics({ type }) {
  axios.post("/api/user/userAction", { type });
}
export default postAnalytics;
