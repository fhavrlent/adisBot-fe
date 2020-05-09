import { create } from 'axios';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.REACT_APP_API_URL);
const axios = create({
  baseURL: process.env.REACT_APP_API_URL,
});

export { axios };
