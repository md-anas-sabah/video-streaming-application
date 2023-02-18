import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/YoutubeVideoApi";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-3 px-10">
      {videos.map((video) => {
        return <VideoCard info={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
