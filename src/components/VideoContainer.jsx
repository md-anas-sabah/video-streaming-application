import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap  gap-3 px-10">
      {videos.map((video) => {
        return (
          <Link to={"watch?v=" + video.id}>
            <VideoCard info={video} key={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
