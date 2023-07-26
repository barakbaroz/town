import axios from "axios";

export function postAnalytics({ type, data }) {
  axios.post("/api/user/userAction", { type, data });
}
