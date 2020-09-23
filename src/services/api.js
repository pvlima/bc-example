import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev2-api.kuppi.com.br',
  headers: {
    'auth-token':
      'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd',
  },
});

export default api;
