import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useVideoUrl(params, procedure) {
  const [videoUrl, setVideoUrl] = useState("");

  const fetch = useCallback(() => {
    if (!params || !procedure) return;
    axios
      .post("https://gist-player-backend.ew.r.appspot.com/v2/requestLink", {
        params,
        procedure,
      })
      .then((res) => setVideoUrl(res.data.url));
  }, [params, procedure]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { videoUrl };
}
