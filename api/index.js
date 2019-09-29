import axios from 'axios'
import { decode as atob, encode as btoa } from 'base-64'
import {
    host,
    port,
    name,
    password
} from '../config.json'

export default {
    apiGetImage(id = '5d812cb81d7189072614d66e') {
        // const id = '5d812cb81d7189072614d66e'
        const basicAuth = 'Basic ' + btoa(name + ':' + password);
        const request = axios.create({
            headers: {
                "Authorization": basicAuth
            }
        });
        return request.get(`${host}:${port}/images/${id}`);
    },

    apiGetCheck() {
        const basicAuth = 'Basic ' + btoa(name + ':' + password);
        const request = axios.create({
            headers: {
                "Authorization": basicAuth
            }
        });
        return request.get(`${host}:${port}/check`);
    }
}