import axios from 'axios';
import { API_ENDPOINT } from '../config';
axios.defaults.baseURL = API_ENDPOINT;

// eslint-disable-next-line
export const GetSongs = async (page: ?number, perPage: ?number) => {
    try {
        const { data } = await axios.get('music/', { params: { page, perPage } });
        return { error: null, res: data };
    } catch (error) {
        return { error, res: null };
    }
};

// eslint-disable-next-line
export const GetSong = async (id : string) => {
    try {
        const { data } = await axios.get(`music/${id}`);
        return { error: null, res: data };
    } catch (error) {
        return { error, res: null };
    }
};
