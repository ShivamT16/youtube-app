const MY_API_KEY = 'AIzaSyDUWIOYFuKpWJ1oMPgUXC8NxVbmwPMmEiU'
export const YOUTUBE_VIDEOS_URL= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ MY_API_KEY; 
export const YOUTUBE_SEARCH_API= 'http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q='
export const YOUTUBE_SEARCH_RESULTS_API='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key='+MY_API_KEY+'&q='