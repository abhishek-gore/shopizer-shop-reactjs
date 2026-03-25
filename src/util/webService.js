import axios from 'axios';
import { getLocalData } from './helper'

const BASE_URL_V1 = window._env_.APP_BASE_URL + '/api/v1/';
const BASE_URL_V2 = window._env_.APP_BASE_URL + '/api/v2/';

// Only these specific endpoints use v2
const V2_ENDPOINTS = [
    'products?',           // Product listing
    'products/',           // Product by category
    'product/',            // Single product (if followed by ID)
];

const getBaseUrl = (action) => {
    // Check if action matches v2 endpoints but exclude products/group
    if (action.startsWith('products/group')) {
        return BASE_URL_V1;
    }
    
    const useV2 = V2_ENDPOINTS.some(endpoint => action.startsWith(endpoint));
    return useV2 ? BASE_URL_V2 : BASE_URL_V1;
};

axios.defaults.baseURL = BASE_URL_V1;

export default class WebService {


    static async post(action, params) {
        let response = await axios.post(action, params)
        return response.data
    }
    static async put(action, params) {
        let response = await axios.put(action, params)
        return response.data
    }
    static async get(action) {
        let response = await axios.get(action)
        return response.data
    }
    static async delete(action) {
        let response = await axios.delete(action)
        return response.data
    }
    static async patch(action, params) {
        let response = await axios.patch(action, params)
        return response.data
    }


}

axios.interceptors.request.use(async (config) => {
    // Do something before request is sent
    config.baseURL = getBaseUrl(config.url);
    const token = await getLocalData("token");
    config.headers.common['Authorization'] = token ? 'Bearer ' + token : '';
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});


axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
}, (error) => {

    // // Any status codes that falls outside the range of 2xx cause this function to trigger
    // // Do something with response error

    const { response } = error;
    // const originalRequest = config;

    if (response.status === 401 || response.status === 404) {

        return Promise.reject(error);
    }
    else {
        return Promise.reject(error);
    }
});

