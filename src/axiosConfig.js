import { create } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const axios = create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': process.env.ORIGIN,
  },
});

axios.defaults.withCredentials = true;
export { axios };
