import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useCasesCount(search) {
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
      method: "POST",
      url: "/api/stuffMembers/casesCount",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
      data: search,
    })
      .then((res) => {
        setCasesCount(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  };

  useEffect(fetch, [navigate, search]);

  return { loading, error, casesCount, fetch };
}
