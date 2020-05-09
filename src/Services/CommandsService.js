import { axios } from '../axiosConfig';

export const CommandsService = {
  getAll: () => axios.get('commands'),
};
