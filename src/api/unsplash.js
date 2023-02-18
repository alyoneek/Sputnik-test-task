import axios from 'axios';

const CLIENT_ID = 'HHwK-wF3iQC-aszcC4rM2WCymCTicP90c-89ATeW22U';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${CLIENT_ID}` },
});
