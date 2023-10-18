import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useVideoUrl(params) {
  const [videoUrl, setVideoUrl] = useState("");

  const getCalender = (procedureDate) => {
    return (new Date(procedureDate)).toLocaleString('en-US', { weekday: 'long' });
  };

  const getFirstMedicinTimeTake = (params) => {
    const [hours] = params.procedureTime.split(":");
    const dayTime = hours >= 15 ? "evening" : "morning";
    return `${params.concentrate} ${dayTime}`
  };

  const getParamsForVideo = (params) => {
    const paramsForVideo = {
      ...params,
      pharmacy: params.concentrate,
      calender: getCalender(params.procedureDate),
      firstMedicinTimeTake: getFirstMedicinTimeTake(params),
      drinking: params.concentrate,
      secondServingHoursBefore: getFirstMedicinTimeTake(params)
    };
    return paramsForVideo;
  }

  const fetch = useCallback(() => {
    if (!params) return;
    axios
      .post("https://gist-player-backend.ew.r.appspot.com/v2/requestLink", {
        params: getParamsForVideo(params),
        procedure: "colo-prep-new",
      })
      .then((res) => setVideoUrl(res.data.url));
  }, [params]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { videoUrl };
}
