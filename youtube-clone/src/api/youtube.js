import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyB12R_Q0WGEQISTe7IQghBS86egCAGrPxM'
  }
});
