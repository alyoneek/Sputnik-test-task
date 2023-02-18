import axios from 'axios';

const CLIENT_ID = 'GvDg08-YzcoNm8tdYAt1-O70SvyUmhBlTNShShwZ5tg';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${CLIENT_ID}` },
});
