import { axios } from '../axiosConfig';

export const UserService = {
  login: async ({ email, password }) => {
    const response = await axios.post('/auth/login', { email, password });
  },
  test: () => axios.get('user/test'),
};
