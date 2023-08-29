import { useEffect, useState } from "react";
import axios from "axios";

export default function useCasesSearch(search, refetchCasesCount) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cases, setCases] = useState([]);

  const deleteCase = (caseId) => {
    setCases((cases) => cases.filter((item) => item.id !== caseId));
    axios
      .delete("/api/cases/delete", { data: { CaseId: caseId } })
      .then(refetchCasesCount)
      .catch(() => setCases(cases));
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    setCases([]);
    let cancel;
    axios({
      method: "POST",
      url: "/api/cases/search",
      data: { search },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setCases(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  }, [search]);

  return { loading, error, cases, deleteCase };
}
