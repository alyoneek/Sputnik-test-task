import axios from 'axios';

export const CLIENT_ID = '6fb7b9e3b3bb770125b23d4b54457037';

export default axios.create({
  baseURL: 'https://api.openweathermap.org',
});
