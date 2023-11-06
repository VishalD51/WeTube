import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, publishedAt } = snippet;
  const { viewCount, channelTitle } = statistics;

  return (
    <div className="video-card">
      <div className="thumbnail">
        <img src={thumbnails.medium.url} alt="thumnail" />
      </div>
      <div className="card-detail">
        <div className="profile-pic"></div>
        <div className="video-details">
          <p className="video-title">{title}</p>
          <div className="channel-details">
            <p className="channel-title">{channelTitle}</p>
            <span className="view">{viewCount}</span>
            <span className="timestamp">{publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
