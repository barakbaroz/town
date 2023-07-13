import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useCasesCount(userId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [casesCount, setCasesCount] = useState({
    totalCases: 0,
    todayCases: 0,
  });
  const navigate = useNavigate();

  const fetch = () => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "/api/stuffMembers/casesCount",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setCasesCount(res.data);
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

  return { loading, error, casesCount, fetch };
}
