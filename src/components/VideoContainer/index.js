import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/constant";
import VideoCard from "../../common/VideoCard";
import "./videocontainer.scss";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="video-container">
      {videos?.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
