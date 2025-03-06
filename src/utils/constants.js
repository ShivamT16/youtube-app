const MY_YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
export const YOUTUBE_VIDEOS_API= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ MY_YOUTUBE_API_KEY; 
export const YOUTUBE_SEARCH_API= 'https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q='
export const YOUTUBE_SEARCH_RESULTS_API='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key='+MY_YOUTUBE_API_KEY+'&q='
export const YOUTUBE_VIDEO_DETAIL_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key='+MY_YOUTUBE_API_KEY+'&id='
export const YOUTUBE_VIDEO_COMMENTS_API = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key='+MY_YOUTUBE_API_KEY+'&videoId='