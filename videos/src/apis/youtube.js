import axios from 'axios';

const KEY = 'AIzaSyBu4RK2RdCt0IEIhdaKk8dfnuF47XMh4sc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
