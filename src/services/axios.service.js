import axios from 'axios';
import { baseUrl } from '../constants/api';

export class HttpRequest {
    constructor() {
        this.service = axios.create({ baseURL: baseUrl });
    }

    #getAuthToken() {
        return localStorage.getItem('access_key')?.replaceAll('"', '')
    }

    #setHeaders(isAuthorized, incomingHeaders) {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...incomingHeaders,
        }
        if (isAuthorized) {
            const token = this.#getAuthToken();
            headers.Authorization = token;
        }
        return headers;
    }
    axiosRequest = async (
        url,
        method,
        isAuthorized,
        params,
        data,
        customHeaders
    ) => {
        const headers = this.#setHeaders(isAuthorized, customHeaders);
        try {
            const response = await this.service.request({
                method,
                url,
                params,
                data,
                headers,
            });
            return await Promise.resolve({
                status: response.status,
                data: response.data,
            });
        } catch (err) {
            if (err?.response?.status === 401) {
                return null;
            }
            return Promise.resolve({
                status: err?.response?.status,
                data: err?.response?.data,
            });
        }
    }
}