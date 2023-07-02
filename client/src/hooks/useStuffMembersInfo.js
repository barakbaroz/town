import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useStuffMembersInfo(userId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stuffData, setStuffData] = useState({
    totalCases: 0,
    todayCases: 0,
    name: "",
    role: "",
  });
  const navigate = useNavigate();

  const fetch = () => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "/api/stuffMembers/info",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setStuffData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        if (e.response.status === 401 || e.response.status === 403) {
          navigate("/login");
        }
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  };

  useEffect(fetch, [navigate, userId]);

  return { loading, error, stuffData, fetch };
}
