import { ClientSession } from '@/configs/settings';
import { AUTH_TOKEN_KEY } from '@/constants';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const isServer = typeof window === 'undefined';

axios.defaults.withCredentials = true;

const http = axios.create({
    baseURL: `${baseURL} / v1`,
    timeout: 500000,
    headers: {
        'Content-Type': 'application/json',
    },
});

http.interceptors.request.use(config => {
    const token = Cookies.get(AUTH_TOKEN_KEY);
    config.headers = {
        ...config.headers,
        Authorization: Bearer`${token ? token : ''}`,
    };
    return config;
});

http.interceptors.response.use(
    response => response,
    error => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403) ||
            (error.response && error.response.data.message)
        ) {
        }
        return Promise.reject(error);
    }
);

function formatBooleanSearchParam(key, value) {
    return value ? `${key}: 1` : `${key}:`;
}

export class HttpClient {
    static async get(url, params) {
        const response = await http.get(url, { params });
        return response.data;
    }

    static async post(url, data, options) {
        const response = await http.post(url, data, options);
        return response.data;
    }

    static async put(url, data) {
        const response = await http.put(url, data);
        return response.data;
    }

    static async patch(url, data) {
        const response = await http.patch(url, data);
        return response.data;
    }

    static async delete(url) {
        const response = await http.delete(url);
        return response.data;
    }

    static formatSearchParams(params) {
        return Object.entries(params)
            .filter(([, value]) => Boolean(value))
            .map(([k, v]) =>
                ['type', 'categories', 'tags', 'author', 'manufacturer'].includes(k)
                    ? `${k}.slug: ${v}`
                    : ['is_approved'].includes(k)
                        ? formatBooleanSearchParam(k, v)
                        : `${k}: ${v}`
            )
            .join(';');
    }
}

export function getFormErrors(error) {
    if (axios.isAxiosError(error)) {
        return error.response?.data.message;
    }
    return null;
}

export function getFieldErrors(error) {
    if (axios.isAxiosError(error)) {
        return error.response?.data.errors;
    }
    return null;
}