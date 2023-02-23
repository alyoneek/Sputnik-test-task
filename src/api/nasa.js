import axios from 'axios';

export const API_KEY = 'jj1hS2wLjBSvdGxKDz6MIsCrMeKyXPrCOWs4ylwz';

export default axios.create({
  baseURL: 'https://api.nasa.gov',
});
