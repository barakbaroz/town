import axios from "axios";

const panelLoader = async () => {
  const response = await axios.get("/api/stuffMembers/info");
  return response.data;
};

export default panelLoader;
