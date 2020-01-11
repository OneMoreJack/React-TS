import axios from 'axios';

const Axi = axios.create()

export const get = <T>(url: string, params: object) => Axi.get<T>(url, { params });
