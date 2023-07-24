import axios from "axios";

export function postAnalytics({ type }) {
  axios.post("/api/user/userAction", { type });
}
