import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../components/Translation";
import { useNavigate } from "react-router-dom";

export default function useUserInfo(userId) {
  const { setLanguage, setGender } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState({ Case: {} });
  const navigate = useNavigate();

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
        setGender(res.data.Case.gender);
        setUserInfo(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response?.status === 404) return navigate("/NotFound");
        setError(true);
        setLoading(false);
      });
  }, [navigate, setGender, setLanguage, userId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { loading, error, userInfo, fetchUserInfo: fetch, updateCase };
}
