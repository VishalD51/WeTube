const GOOGLE_VIDEO_API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  GOOGLE_VIDEO_API_KEY;
