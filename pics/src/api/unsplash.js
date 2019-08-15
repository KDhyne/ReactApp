import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 88528475bd88780a0c3cb321202800e3284cc7d3ebb9c6235bc41b6e3d93ff95'
  }
});
