import axios from 'axios';

export const get = (url: string, params: object) => axios.get(url, { params });
