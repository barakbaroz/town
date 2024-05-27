import { useEffect, useState } from "react";
import axios from "axios";

export default function useVideo({ language, Case, Questionnaires }) {
  const [video, setVideo] = useState({ src: "" });

  useEffect(() => {
    const { ethnicity, age, gender } = Case.Avatar;
    const { procedureTime, procedureDate, concentrate } = Case;
    const [hours] = procedureTime.split(":");
    const dayTime = hours >= 15 ? "evening" : "morning";
    const weekday = new Date(procedureDate).toLocaleString("en-US", {
      weekday: "long",
    });
    axios
      .post(
        "https://animator-panel-refactor.oa.r.appspot.com/api/video/v1/requestLink",
        {
          avatar: {
            age,
            gender,
            ethnicity: ethnicityMapper[ethnicity] || ethnicity,
            hospital: "newtown",
            language: languageMapper[language],
          },
          data: {
            weekday,
            dayTime,
            concentrate,
            Questionnaires,
          },
          project: { value: "colonoscopy-preparation-usa" },
        }
      )
      .then((res) => setVideo(res.data));
  }, [Case, Questionnaires, language]);

  return { video };
}

const ethnicityMapper = {
  white: "light",
  black: "dark",
};

const languageMapper = {
  he: "hebrew",
  en: "english",
  ru: "russian",
  ar: "arabic",
  sp: "spanish",
};
