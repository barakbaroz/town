import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../components/Translation";

export default function useUserInfo(userId) {
  const { setLanguage } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    Case: { age: "0-3", gender: "male", race: "white" },
  });

  const updateCase = (newData) => {
    setUserInfo((prev) => ({ ...prev, Case: { ...prev.Case, ...newData } }));
    return axios.put("/api/cases/update", { ...newData, userId });
  };

  const fetch = useCallback(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "POST",
      url: "/api/users/getData",
      data: { userId },
    })
      .then((res) => {
        setLanguage(res.data.language);
        setUserInfo(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [setLanguage, userId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { loading, error, userInfo, fetchUserInfo: fetch, updateCase };
}
