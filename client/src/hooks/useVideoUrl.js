import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useVideoUrl(params) {
  const [videoUrl, setVideoUrl] = useState("");

  const fetch = useCallback(() => {
    if (!params) return;
    axios
      .post("https://gist-player-backend.ew.r.appspot.com/v2/requestLink", {
        params,
        procedure: "colonoscopy-preperation",
      })
      .then((res) => setVideoUrl(res.data.url));
  }, [params]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { videoUrl };
}
