import axios from 'axios';

const CLIENT_ID = 'Hzx0domOO9BBzKo8Eg-kBPDdSm6WIhGIh5g39dP6qc4';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${CLIENT_ID}` },
});
